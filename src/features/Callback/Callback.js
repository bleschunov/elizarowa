import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Fade } from 'react-awesome-reveal'
import emailjs from '@emailjs/browser';

import Button from '../Button/Button'
import Input from '../Input/Input'
import Select from '../Input/Select'
import Textarea from '../Input/Textarea'
import Container from '../Container/Container'
import Title from '../Title/Title'
import Icon from '../Icon/Icon'

import './Callback.scss'
import '../../styles/fonts.scss'
import vars from '../../styles/vars.scss'
import kateWithCat from '../../images/kateWithCat.png'


const Callback = () => {
    const listOfPreferences = [ 'Телеграм', 'Вотсап', 'Вайбер', 'СМС' ]
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Как вас зовут?'),
        phone: Yup.string().required('Введите ваш номер телефона'),
        info: Yup.string(),
        preferences: Yup.string().oneOf(listOfPreferences, 'Выберите вариант из списка')
    })

    return (
        <section className="callback" id="callback" >
            <Container>
                <div className="flex">
                    <Title 
                        title="Оставьте заявку, и я перезвоню"
                        subtitle="Обсудим наше сотрудничество во всех деталях" />
                    <div className="callback__flex">
                        <Fade
                            direction='left'
                            fraction={0.4}
                            triggerOnce
                        >
                            <Formik
                                initialStatus='idle'
                                initialValues={{
                                    name: '',
                                    phone: '',
                                    info: '',
                                    preferences: 'Телеграм'
                                }}
                                validationSchema={validationSchema}
                                onSubmit={(values, { resetForm, setSubmitting, setStatus }) => {

                                    setStatus('submissionInProgress')

                                    const 
                                        serviceId = 'service_bwxc78m',
                                        templateId = 'template_dlwij2d',
                                        publicKey = 'OAEOE29iSCK_HbsEK'

                                    emailjs.send(serviceId, templateId, values, publicKey)
                                        .then(() => {
                                            resetForm()
                                            setStatus('submitted')
                                        })
                                        .catch(() => {
                                            setStatus('submissionError')
                                        })
                                        .finally(() => {
                                            setSubmitting(false)
                                        })
                                }} >
                                {
                                    ({ status }) => {
                                        if (status === 'idle') return (
                                            <Form className="callback__card card">
                                                <Input
                                                    name="name"
                                                    label="Имя"
                                                    placeholder="Дмитрий" />
                                                <Input 
                                                    name="phone"
                                                    label="Телефон"
                                                    placeholder="+7-XXX-XXX-XX-XX" />
                                                <Textarea
                                                    name="info"
                                                    label="Комментарий"
                                                    placeholder="Имя и возраст ребёнка, район проживания, увлечения..." />
                                                <Select
                                                    name="preferences"
                                                    label="Предпочтительный канал связи"
                                                    options={listOfPreferences} />
                                                <Button
                                                    className="callback__button"
                                                    type="submit"
                                                    hierarchy="primary"
                                                    size="xl"
                                                    disabled={ status === 'submissionInProgress' }>
                                                        Отправить
                                                </Button>
                                                <p className="callback__footer text-xs-regular">
                                                    Нажимая на кнопку Отправить, вы даёте своё согласие на обработку персональных данных и соглашаетесь с <span>политикой конфиденциальности</span>
                                                </p>
                                            </Form>
                                        )
                                        else if (status === 'submitted') return (
                                            <div className="callback__card card callback__successfulMessage">
                                                <Icon 
                                                    className="callback__successfulIcon"
                                                    name="success" 
                                                    color={vars.rose400}
                                                    width="72"
                                                    height="72" />
                                                <p className="text-lg-regular callback__successfulText">
                                                    Спасибо за заявку! Я перезвоню в ближайшее время!
                                                </p>            
                                            </div>
                                        ) 
                                        else if (status === 'submissionError') return (
                                            <div className="callback__card card callback__successfulMessage">
                                                <Icon 
                                                    className="callback__successfulIcon"
                                                    name="error" 
                                                    color={vars.error500}
                                                    width="72"
                                                    height="72" />
                                                <p className="text-lg-regular callback__successfulText">
                                                    Не получилось отправить форму. Пожалуйста, перезагрузите страницу или попробуйте позже
                                                </p>            
                                            </div>
                                        )
                                    }
                                }
                            </Formik>
                        </Fade>
                        <Fade
                            direction='right'
                            fraction={1}
                            triggerOnce
                        >
                            <div className="sm">
                                <img src={kateWithCat} alt="нарисованная катя с кошкой" />
                            </div>
                        </Fade>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Callback