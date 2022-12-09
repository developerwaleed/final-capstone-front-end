import renderer from 'react-test-renderer';
import Alert from '../components/Alert';

it('<Alert /> renders correctly', () => {
  const alert = {
    type: 'success',
    title: 'Notification',
    message: 'Test Successful',
  };
  const tree = renderer
    .create(<Alert {...alert} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
