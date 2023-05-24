import { css } from 'styled-components';

const InputStyles = css`
  width: 100%;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 500;
  padding: 8px 16px;
  cursor: pointer;
`;

const ButtonStyles = css`
  width: 100%;
  padding: 6px 12px;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 500;
  cursor: pointer;
`;

const FormStyles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export { ButtonStyles, InputStyles, FormStyles };
