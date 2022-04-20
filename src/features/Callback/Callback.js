import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Fade } from 'react-awesome-reveal'

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


const Callback = () => {
    const listOfPreferences = [ 'Телеграм', 'Вотсап', 'Вайбер', 'СМС' ]
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Как вас зовут?'),
        tel: Yup.string().required('Введите ваш номер телефона'),
        info: Yup.string(),
        preferences: Yup.string().oneOf(listOfPreferences, 'Выберите вариант из списка')
    })

    return (
        <section className="callback" id="callback">
            <Container>
                <div className="flex">
                    <Title 
                        title="Оставьте заявку, и я перезвоню"
                        subtitle="Обсудим наше сотрудничество во всех деталях" />
                    <div className="callback__flex">
                        
                        <Fade
                            direction='left'
                            triggerOnce
                        >
                            <Formik
                                initialValues={{
                                    name: '',
                                    tel: '',
                                    info: '',
                                    preferences: 'Телеграм'
                                }}
                                validationSchema={validationSchema}
                                onSubmit={(values, { resetForm, setSubmitting, setStatus }) => {
                                    console.log(JSON.stringify(values))
                                    resetForm()
                                    setStatus('submitted')
                                    setSubmitting(false)
                                }} >
                                {
                                    ({ status, isSubmitting, isValidating }) => {
                                        if (status !== 'submitted') return (
                                            <Form className="callback__card card">
                                                <Input
                                                    name="name"
                                                    label="Имя"
                                                    placeholder="Дмитрий" />
                                                <Input 
                                                    name="tel"
                                                    label="Телефон"
                                                    placeholder="+7-903-730-34-83" />
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
                                                    disabled={ isSubmitting && isValidating }>
                                                        Отправить
                                                </Button>
                                                <p className="callback__footer text-xs-regular">
                                                    Нажимая на кнопку Отправить, вы даёте своё согласие на обработку персональных данных и соглашаетесь с <span>политикой конфиденциальности</span>
                                                </p>
                                            </Form>
                                        )
                                        else return (
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
                                    }
                                }
                            </Formik>
                        </Fade>
                        <Fade
                            direction='right'
                            triggerOnce
                        >
                            <div className="sm">
                                <img src="./images/kateWithCat.png" alt="нарисованная катя с кошкой" />
                            </div>
                        </Fade>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Callback