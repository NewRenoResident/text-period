"use client";
import { getNotifications } from "@/lib/serverActions";
import React, { useEffect, useState } from "react";
import Notification from "../Notification/Notification";
import MainPageElement from "../pages/MainPageElement";
export default function NotificationsList({ userId }) {
  const [notifications, setNotifications] = useState([]);

  const getNotificationsHandler = async () => {
    const notificationsResp = await getNotifications(userId);
    const arrNotificationsResp = JSON.parse(notificationsResp);
    setNotifications(arrNotificationsResp);
  };

  useEffect(() => {
    getNotificationsHandler();
  }, []);

  return (
    <div className="w-full flex flex-col h-full">
      {notifications
        ? notifications.map((notification, index) => (
            <MainPageElement key={index}>
              <Notification
                content={notification?.content}
                createdAt={notification?.createdAt}
                type={notification?.type?.type}
              />
            </MainPageElement>
          ))
        : "You have no notifications"}
    </div>
  );
}
