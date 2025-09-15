// src/App.tsx
import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonPage,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import Home from "./pages/Home";
import Tabs from "./pages/Tabs";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "@ionic/react/css/palettes/dark.system.css"; // Dark mode (system)

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        {/* 🔹 Side Menu */}
        <IonMenu contentId="main" type="overlay">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem routerLink="/home">Home</IonItem>
              <IonItem routerLink="/tabs/tab1">Tab 1</IonItem>
              <IonItem routerLink="/tabs/tab2">Tab 2</IonItem>
              <IonItem routerLink="/tabs/tab3">Tab 3</IonItem>
            </IonList>
          </IonContent>
        </IonMenu>

        {/* 🔹 Main Content */}
        <IonPage id="main">
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact />
            <Route path="/tabs" component={Tabs} />
            <Redirect exact from="/" to="/home" />
          </IonRouterOutlet>
        </IonPage>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
