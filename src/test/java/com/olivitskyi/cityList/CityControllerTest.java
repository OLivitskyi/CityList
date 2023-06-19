package com.olivitskyi.cityList;

import com.olivitskyi.cityList.entity.City;
import com.olivitskyi.cityList.repo.CityRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class CityControllerTest {

    @Autowired
    private WebApplicationContext context;

    private MockMvc mockMvc;

    @Autowired
    private CityRepository cityRepository;

    private City testCity;

    @BeforeEach
    public void setUp() {
        mockMvc = MockMvcBuilders
                .webAppContextSetup(context)
                .apply(springSecurity())
                .build();

        testCity = new City();
        testCity.setName("Test City");
        testCity.setPhoto("https://example.com/test-city.jpg");
        testCity = cityRepository.save(testCity);
        System.out.println("Test City: " + testCity);
    }


    @Test
    @WithMockUser(roles = "ALLOW_EDIT")
    public void testSaveCity() throws Exception {
        mockMvc.perform(post("/api/cities")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\": \"New Test City\", \"photo\": \"https://example.com/new-test-city.jpg\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").isNotEmpty())
                .andExpect(jsonPath("$.name").value("New Test City"))
                .andExpect(jsonPath("$.photo").value("https://example.com/new-test-city.jpg"));
    }

    @Test
    @WithMockUser(roles = "ALLOW_EDIT")
    public void testDeleteCity() throws Exception {
        mockMvc.perform(delete("/api/cities/{id}", testCity.getId()))
                .andExpect(status().isOk());
    }
}