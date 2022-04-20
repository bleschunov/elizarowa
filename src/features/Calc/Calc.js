import { Formik, Form, useFormikContext } from 'formik'
import useTotal from './hooks/useTotal'
import * as Yup from 'yup'
import { Fade } from 'react-awesome-reveal'

import DropdownInput from '../Input/DropdownInput'
import Input from '../Input/Input'
import Checkbox from '../Checkbox/Checkbox'
import Container from '../Container/Container'
import Title from '../Title/Title'

import '../../styles/fonts.scss'
import './Calc.scss'


const Calc = () => {

    const Total = () => {
        const { values, errors } = useFormikContext()

        const price = useTotal({ values, errors })

        return (
            <div className="calc__priceGroup">
                <p className="text-xl-regular">Итого:</p>
                <p className="display-lg-regular">{price}₽</p>
            </div>
        )
    }

    // Элементы для списка
    const time = []
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 2; j++) {
        const hh = String(i).length === 1 ? `0${i}` : i
        const mm = j === 0 ? '00' : '30'
        time.push(`${hh}:${mm}`)
        }
    }

    const walkTimeMin = 0
    const walkTimeMax = 10
    const validationSchema = Yup.object().shape({
        workStart: Yup
            .string()
            .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Введите время в формате ЧЧ:ММ')
            .required('Введите время в формате ЧЧ:ММ'),
        workFinish: Yup
            .string()
            .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Введите время в формате ЧЧ:ММ')
            .required('Введите время в формате ЧЧ:ММ'),
        walkTime: Yup
            .number()
            .integer()
            .typeError(`Можно ввести только цифры от ${walkTimeMin} до ${walkTimeMax}`)
            .min(walkTimeMin, `Можно ввести только цифры от ${walkTimeMin} до ${walkTimeMax}`)
            .max(walkTimeMax, `Можно ввести только цифры от ${walkTimeMin} до ${walkTimeMax}`)
    })

    return (
        <section className="calc" id="calc">
            <Container>
                <div className="flex">
                    
                    <Title 
                        title="Калькулятор"
                        subtitle="Рассчитайте стоимость с учётом ваших потребностей" />

                    
                    <div className="calc__flex">
                        <Fade
                            direction='left'
                            triggerOnce
                        >
                            <div className="sm">
                                <img src="./images/childWithToys.png" alt="нарисованный ребёнок" />
                            </div>
                        </Fade>
                        <Fade
                            direction='right'
                            triggerOnce
                        >
                            <Formik
                                initialValues={{
                                    workStart: '08:00',
                                    workFinish: '19:00',
                                    walk: false,
                                    walkTime: '',
                                    homework: false,
                                    drawing: true
                                }}
                                initialTouched={{
                                    workStart: false
                                }}
                                validateOnBlur={false}
                                validationSchema={validationSchema}>
                                <Form className="calc__card card">
                                    <DropdownInput
                                        name="workStart"
                                        placeholder="09:00"
                                        label="Начало работы"
                                        options={time} />
                                    <DropdownInput
                                        name="workFinish"
                                        placeholder="09:00"
                                        label="Конец работы"
                                        options={time} />
                                    <Checkbox 
                                        name="walk"
                                        text="Прогулка"
                                        helper="+100₽/час" />
                                    <Input
                                        name="walkTime"
                                        placeholder="Введите число..."
                                        label="Кол-во часов прогулки" />
                                    <Checkbox 
                                        name="homework"
                                        text="Помощь с домашним заданием"
                                        helper="+700₽" />
                                    <Checkbox 
                                        name="drawing"
                                        text="Урок рисования"
                                        helper="+1000₽" />
                                    <Total />
                                </Form>
                            </Formik>
                        </Fade>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Calc