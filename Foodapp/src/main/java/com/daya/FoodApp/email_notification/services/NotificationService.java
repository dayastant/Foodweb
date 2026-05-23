package com.daya.FoodApp.email_notification.services;

import com.daya.FoodApp.email_notification.dtos.NotificationDTO;

public interface NotificationService {
    void sendEmail(NotificationDTO notificationDTO);
}
