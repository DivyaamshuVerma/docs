package com.examly.springapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.examly.springapp.model.Feedback;
@Service

public interface FeedbackService {
    public Feedback addFeedback(Feedback feedback);
    public List<Feedback> getAllFeedback();
    public List<Feedback> getAllFeedbackByUserId(Long userId);
    public Feedback editFeedback(long feedbackId,Feedback updatedFeedback);
    public Feedback deleteFeedback(long feedbackId);
}
