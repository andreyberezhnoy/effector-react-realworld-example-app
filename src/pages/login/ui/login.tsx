import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form } from '../../../ui';
import { Links } from '../../../router';
import { formSubmitted } from '../model';
import '../init';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <h1 className="h1">Sign In</h1>

      <p>
        <Link to={Links.REGISTRATION}>Need an account?</Link>
      </p>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          formSubmitted({ email, password });
        }}>
        <div>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>

        <input
          type="password"
          name="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <button type="submit">Sign In</button>
      </Form>
    </Container>
  );
};
