// src/pages/Tab1.tsx
import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

const Tab2: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Tab 1</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      Welcome to Tab 1!
    </IonContent>
  </IonPage>
);

export default Tab2;
