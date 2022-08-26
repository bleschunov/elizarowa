import { useState } from 'react'

import Hero from '../features/Hero/Hero'
import About from '../features/About/About'
import Advantages from '../features/Advantages/Advantages'
import Reviews from '../features/Reviews/Reviews'
import Prices from '../features/Prices/Prices'
import Calc from '../features/Calc/Calc'
import Callback from '../features/Callback/Callback'
import Telegram from '../features/Telegram/Telegram'
import Modal from '../features/Modal/Modal'
import Articles from '../features/Articles/Articles'

const MainPage = () => {
    const [modalDialogue, setModalDialogue] = useState(false)

    return (
        <>
            <Hero />
            <About />
            <Advantages />
            <Reviews />
            <Prices setModalDialogue={setModalDialogue} />
            <Calc />
            <Callback />
            <Telegram />
            <Articles />
            <Modal modalDialogue={modalDialogue} setModalDialogue={setModalDialogue} />
        </>
    )
}

export default MainPage