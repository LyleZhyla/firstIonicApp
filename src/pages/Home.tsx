// src/pages/Home.tsx
import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* 🔹 Header */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Ionic Grid App</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* 🔹 Content with Grid */}
      <IonContent className="ion-padding">
        <IonGrid>
          {/* Row 1 */}
          <IonRow>
            <IonCol size="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Column 1</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  This is the first column.
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Column 2</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  This is the second column.
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Row 2 */}
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Full Width</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  This takes up the whole row (12 columns).
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
