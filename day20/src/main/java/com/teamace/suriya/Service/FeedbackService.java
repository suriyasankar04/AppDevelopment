package com.teamace.suriya.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import com.teamace.suriya.dto.response.FeedbackResponse;
import com.teamace.suriya.client.FeedbackClient;
import com.teamace.suriya.vo.Feedback;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class FeedbackService {
        private final FeedbackClient feedbackClient;

    public List<FeedbackResponse> getFeedbacks() {
        List<Feedback> feedbacks = feedbackClient.getFeedbacks();
        return feedbacks.stream()
                .map(feedback -> {
                    FeedbackResponse response = new FeedbackResponse();
                    response.setFid(feedback.getFid());
                    response.setUsername(feedback.getUsername());
                    response.setUseremail(feedback.getUseremail());
                    response.setQuestion(feedback.getQuestion());
                    response.setAnswer(feedback.getAnswer());
                    return response;
                })
                .collect(Collectors.toList());
    }
}
