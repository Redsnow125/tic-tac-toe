import './Box.css'
import Button from './O';
let xORo = '.'
const switcher = () =>{
  if(xORo === 'X'){
      xORo = 'O'
  }else{
      xORo = 'X'
  }
}

function Square() {

  return (
    <div className='boxStyle'>
      <Button {...xORo} onClick={switcher}/>
      <Button {...xORo} onClick={switcher}/>
      <Button {...xORo} onClick={switcher}/>
      <Button {...xORo} onClick={switcher}/>
      <Button {...xORo} onClick={switcher}/>
      <Button {...xORo} onClick={switcher}/>
      <Button {...xORo} onClick={switcher}/>
      <Button {...xORo} onClick={switcher}/>
      <Button {...xORo} onClick={switcher}/>
    </div>
  );
}
export default Square;
