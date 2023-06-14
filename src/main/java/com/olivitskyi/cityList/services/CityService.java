package com.olivitskyi.cityList.services;

import com.olivitskyi.cityList.entity.City;
import com.olivitskyi.cityList.repo.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CityService {
    @Autowired
    private CityRepository cityRepository;

    public Page<City> findAll(Pageable pageable) {
        return cityRepository.findAll(pageable);
    }

    public Page<City>  findByName(String name, Pageable pageable) {
        return cityRepository.findByNameContainingIgnoreCase(name, pageable);
    }

    public City save(City city) {
        return cityRepository.save(city);
    }

    public void deleteById(Long id) {
        cityRepository.deleteById(id);
    }
}