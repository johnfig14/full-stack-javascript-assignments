import Test from 'ava';
import Assignment from './';

Test('determine typings', t => {
  console.log(typeof(Assignment.greet));
  
  console.log(Assignment.greet);
  
  console.log(Object);
  
  console.log(Assignment.time());
  
  if(null) {
    t.truthy(false);
  }
});
