package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Feedback;
import com.examly.springapp.model.Project;
import com.examly.springapp.service.FeedbackService;
import com.examly.springapp.service.FeedbackServiceImpl;

@RestController
public class FeedBackController {
    @Autowired
    FeedbackService feedbackService;

    @PostMapping("/api/feedback")
    public ResponseEntity<Feedback> addFeedback(@RequestBody Feedback feedback){
        System.out.println("geetinf from angular"+feedback);
        Feedback f=feedbackService.addFeedback(feedback);
        if(f!=null){
            System.out.println(f);
            return ResponseEntity.status(HttpStatus.CREATED).body(f);
        }
        else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @DeleteMapping("/api/feedback/{feedbackId}")
    public ResponseEntity<Feedback> deleteFeedback(@PathVariable long feedbackId){
        Feedback f=feedbackService.deleteFeedback(feedbackId);
        if(f!=null){
            return ResponseEntity.status(HttpStatus.OK).body(f);
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @GetMapping("/api/feedback/{userId}")
    public ResponseEntity<List<Feedback>> getAllFeedbackByUserId(@RequestBody Feedback feedback,@PathVariable long userId){
        List<Feedback> list=feedbackService.getAllFeedbackByUserId(userId);
        if(list!=null){
            return ResponseEntity.status(HttpStatus.OK).body(list);
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
    @GetMapping("/api/feedback")
    public ResponseEntity <List<Feedback>> getAllFeedback(){
        List<Feedback> f  = feedbackService.getAllFeedback();
        if(f!=null){
            return ResponseEntity.status(HttpStatus.OK).body(f);    
        }
        else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
            
        }
    }  

}
    