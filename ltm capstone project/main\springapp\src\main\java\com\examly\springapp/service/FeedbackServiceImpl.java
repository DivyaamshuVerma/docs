package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Feedback;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.FeedbackRepo;
import com.examly.springapp.repository.UserRepo;

@Service
public class FeedbackServiceImpl implements FeedbackService {
    @Autowired
    FeedbackRepo feedbackRepo;

    @Autowired
    UserRepo userRepo;

    public Feedback addFeedback(Feedback feedback) {
        return feedbackRepo.save(feedback);
    }

    public List<Feedback> getAllFeedback() {
        List<Feedback> feedbacks=feedbackRepo.findAll();
        if(feedbacks.isEmpty()){
            return null;
        }
        else{
            return feedbacks;
        }
    }

    public List<Feedback> getAllFeedbackByUserId(Long userId) {
	return feedbackRepo.findByUserUserId(userId);       
    }

    public Feedback editFeedback(long feedbackId, Feedback updatedFeedback) {
        Feedback oldFeedBack=null;
        Feedback newFeedBack=null;
        Optional<Feedback> ops=feedbackRepo.findById(feedbackId);
        if(ops.isPresent()){
            oldFeedBack=ops.get();
            oldFeedBack.setFeedbackText(updatedFeedback.getFeedbackText());
            oldFeedBack.setDate(updatedFeedback.getDate());
            newFeedBack=feedbackRepo.save(oldFeedBack);
            return newFeedBack;
        }
        else{
            return null;
        }
    }

    public Feedback deleteFeedback(long feedbackId) {
        Optional<Feedback> ops=feedbackRepo.findById(feedbackId);
        Feedback f=null;
        if(ops.isPresent()){
            f=ops.get();
            feedbackRepo.deleteById(feedbackId);
            return f;
        }
        else{
            return f;
        }
    }

}
