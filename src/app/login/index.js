import { memo, useState, useCallback } from 'react';
import PageLayout from '../../components/page-layout';
import Modal from '../../components/modal';
import Field from '../../components/field';
import Input from '../../components/input';
import Button from '../../components/button';
import Form from '../../components/form';
import validation from '../../utils/validation';
import authorization from '../../utils/authorization';
import Spinner from '../../components/spinner';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
    error: '',
  });

  const [loading, setLoading] = useState(false);

  const callbacks = {
    onChange: useCallback((value, name) => {
      setData(prevData => ({ ...prevData, [name]: value, error: '' }));
    }, [data]),
    onSubmit: useCallback((e) => {
      e.preventDefault();
      validation(data)
        .then((data) => {
          setLoading(true);
          authorization(data);
        })
        .catch((e) => setData(prevData => ({ ...prevData, error: e.message })))
    }, [data])
  }

  return (
    <PageLayout>
      <Modal title={loading ? 'Вход' : 'Авторизация'}>
        {loading ?
          <Spinner />
          :
          <Form onSubmit={callbacks.onSubmit}>
            <Field label='Почта'>
              <Input name='email'
                type='email'
                value={data.email}
                onChange={callbacks.onChange}
                error={data.error}
                placeholder='qwerty@mail.ru' />
            </Field>
            <Field label='Пароль'>
              <Input name='password'
                type='password'
                value={data.password}
                onChange={callbacks.onChange}
                error={data.error}
                placeholder='от 8 до 16 символов' />
            </Field>
            <Field error={data.error} />
            <Button title='Войти' />
          </Form>
        }
      </Modal>
    </PageLayout >
  )
}

export default memo(Login);