'use client'
import ThemeSwitcher from "./components/ThemeSwitcher";
import Checkboxx from './components/Checkboxx';
import ProgressCirculer from './components/ProgressCirculer';
import DividerComp from './components/DividerComp';
import ModalCompo from './components/ModalCompo';
import SnippedCompo from './components/SnippedCompo';
import CardCompo from './components/CardCompo';
import SpinnerCompo from './components/SpinnerCompo';
import SwitchCompo from './components/SwitchCompo';
import BreadCrumbs from './components/BreadCrumbs';
import AccordianCompo from './components/AccordianCompo';
import AutoComplete from './components/AutoComplete';
import SliderCompo from './components/SliderCompo';
import ButtonsCompo from "./components/ButtonsCompo";
import TabCompo from './components/TabCompo';
import UserCompo from './components/UserCompo';


const variants = ["solid", "bordered", "light"];

export default function Home() {
  return (
    <section className="py-26 ">
      <div className="container flex flex-col items-center justify-center">
        <ThemeSwitcher/>
        <BreadCrumbs/>
        <AccordianCompo/>
        <AutoComplete/>
        <ButtonsCompo/>
        <Checkboxx/>
        <ProgressCirculer />
        <DividerComp/>
        <ModalCompo/>
        <SnippedCompo/>
        <CardCompo/>
        <SpinnerCompo/>
        <SwitchCompo/>
        <SliderCompo/>
        <TabCompo/>
        <UserCompo/>
        
      </div>
    </section>
  );
}
