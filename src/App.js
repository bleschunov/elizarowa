import Button from './features/Button/Button'
import TelegramButton from './features/Button/TelegramButton'
import VkButton from './features/Button/VkButton';

import Input from './features/Input/Input';

import './App.scss';
import DropdownInput from './features/Input/DropdownInput';



function App() {

  const mockedData = []
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 2; j++) {
      const hh = String(i).length === 1 ? `0${i}` : i
      const mm = j === 0 ? '00' : '30'
      mockedData.push(`${hh}:${mm}`)
    }
  }

  return (
    <div className="app">
      {/* <Button type="primary" size="2xl" icon={ <Icon name="telegram" width="20" height="20" color="white" /> } >Label</Button> */}
      <Button type="primary" size="xl">Label</Button>
      <Button type="primary" size="lg">Label</Button>
      <Button type="primary" size="md">Label</Button>
      <Button type="primary" size="sm" disabled>Label</Button>

      <TelegramButton>Label</TelegramButton>
      <VkButton></VkButton>

      <Button type="linkGray" size="sm">button</Button>
      <Button type="linkGray" size="md">button</Button>
      <Button type="linkGray" size="lg">button</Button>
      <Button className="" type="linkGray" size="xl" disabled>button</Button>

      <Input
        type="text"
        label="text"
        hint="helpertext"
        placeholder="9:00" />

      <DropdownInput
        type="text"
        label="text"
        hint="helpertext"
        placeholder="9:00"
        options={mockedData} />

      {/* <Select 
        label="text"
        hint="helpertext"
        placeholder="9:00"
        options={mockedData} /> */}

    </div>
  );
}

export default App;
