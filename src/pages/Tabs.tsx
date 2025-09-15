import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { home, person, settings } from "ionicons/icons";

import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

const Tabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route exact path="/tabs/tab1" component={Tab1} />
      <Route exact path="/tabs/tab2" component={Tab2} />
      <Route exact path="/tabs/tab3" component={Tab3} />
      <Redirect exact from="/tabs" to="/tabs/tab1" />
    </IonRouterOutlet>

    <IonTabBar slot="bottom">
      <IonTabButton tab="tab1" href="/tabs/tab1">
        <IonIcon icon={home} />
        <IonLabel>Tab 1</IonLabel>
      </IonTabButton>

      <IonTabButton tab="tab2" href="/tabs/tab2">
        <IonIcon icon={person} />
        <IonLabel>Tab 2</IonLabel>
      </IonTabButton>

      <IonTabButton tab="tab3" href="/tabs/tab3">
        <IonIcon icon={settings} />
        <IonLabel>Tab 3</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default Tabs;
