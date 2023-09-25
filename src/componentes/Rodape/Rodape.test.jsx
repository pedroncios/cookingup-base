import { render } from '@testing-library/react';
import Rodape from './index';

test('Renderiza o texto do footer corretamente', () => {
  const { getByText } = render(<Rodape />);
  const footerText = getByText('Desenvolvido por Alura | 2023 - Projeto fictício sem fins comerciais.');
  expect(footerText).toBeInTheDocument();
});