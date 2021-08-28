import budget from '../images/be.png';
import pass from '../images/pass.jpeg';
import mercedes from '../images/mercedes_proj.png';
import cinema from '../images/java_opp.jpeg';

const projects = [
    {
      name: 'Budget Expert',
      desc:
        'An Web application to track all your expenses & manage your bills, all in one place, Budget Expert',
      img: budget,
      website:'https://auth-be.web.app/',
    },
    {
      name: 'Mercedes AMG F1 - Website',
      desc:
        'This was my first web project, made this for my curricular unit of web development in my last year degree in IT Management! ',
      img: mercedes,
      website:'https://github.com/coachiCODE/webproj',
    },
    {
      name: 'Cinema Box Office',
      desc:
        'This was my first Java project, made this for my curricular unit of Object Oriented Languages',
      img: cinema,
      website:'https://github.com/coachiCODE/JAVA_OOP',
    },
    {
      name: "Password Generator",
      desc:
        'Simple but Safe, made this password generator in a few lines with Python',
      img: pass,
      website:'https://github.com/coachiCODE/Gen_pass',
    },
  ];
  export default projects;