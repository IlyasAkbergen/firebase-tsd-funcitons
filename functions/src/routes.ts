import { Request, Response, Router } from 'express';
import * as admin from "firebase-admin";
import Messaging = admin.messaging.Messaging;

export const routes = (app: Router, fms: Messaging) => {
  
  // GET /hello
  app.post('/notify-running-out-good', (req: Request, res: Response) => {

    if (req.body.wh == null || req.body.wh == undefined
        || req.body.good_name == null || req.body.good_name == undefined) {
       return res.send('wrong paramenters');
    }

    const payload = {notification: {
        title: 'Необходимо пополнить остатки товара',
        body: `Остатки товара "${req.body.good_name}" достигли лимита.`,
        sound: 'default'
      }
    };
    const topic = req.body.wh;
    
    return fms.sendToTopic(<string>topic, payload)
      .then(function(response){
        res.send('Notification sent successfully: ' + response);
      })
      .catch(function(error){
        res.send('Notification sending failed: ' + error);
      });
  });
};