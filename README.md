# TCAL

## Instruction

1. git clone
2. npm install
3. npm start
4. wait for compiled successfully (may take 10-15 seconds).
5. open browser and go to http://localhost:5000/



## Demo

Here is a working live demo :  https://billws.github.io/TCAL/index.html


## Application

### User Interface

The calculator is compatible with devices of all display sizes when you click Calculator button.

![](https://billws.github.io/TCAL/images/demo01.png)

And you can move the calculator by drag & drop. 

![](https://billws.github.io/TCAL/images/demo02.png)

Now, you can use the calculator.

![](https://billws.github.io/TCAL/images/demo03.png)

Also, closing it when you click outside of the calculator.

### Built with

- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps.

### File Structure

![](https://billws.github.io/TCAL/images/demo04.png)

#### Importance files

- [action.js] - describe what's happening when user click four operations, number and decimal happening. 
- [calculator.js] - this is calculator's ui which wrote by react.js. 
- [calreducer.js] - Save the calculator's state. 
- [tools.js] - here is the functions used for detect device and calculating the result. 
- [style.scss] - cascading style sheets for the calculator and used the media and @mixin to apply different styles for different display width.


