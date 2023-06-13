package com.olivitskyi.cityList.controllers;

import com.olivitskyi.cityList.entity.City;
import com.olivitskyi.cityList.services.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cities")
public class CityController {
    @Autowired
    private CityService cityService;

    @GetMapping
    public List<City> findAll() {
        return cityService.findAll();
    }

    @GetMapping("/{id}")
    public City findById(@PathVariable Long id) {
        return cityService.findById(id);
    }

    @PostMapping
    public City save(@RequestBody City city) {
        return cityService.save(city);
    }

    @PutMapping("/{id}")
    public City update(@PathVariable Long id, @RequestBody City city) {
        city.setId(id);
        return cityService.save(city);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        cityService.deleteById(id);
    }
}