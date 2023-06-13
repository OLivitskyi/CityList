package com.olivitskyi.cityList.component;

import com.olivitskyi.cityList.entity.City;
import com.olivitskyi.cityList.repo.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;

@Component
public class DataLoader implements CommandLineRunner {
    @Autowired
    private CityRepository cityRepository;

    @Override
    public void run(String... args) throws Exception {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(getClass().getResourceAsStream("/cities.csv"), StandardCharsets.UTF_8))) {
            reader.lines().skip(1).forEach(line -> {
                String[] fields = line.split(",");
                City city = new City();
                city.setId(Long.parseLong(fields[0]));
                city.setName(fields[1]);
                city.setPhoto(fields[2]);
                cityRepository.save(city);
            });
        }
    }
}