function showDetails() {
    const studentNumber = document.getElementById('studentNumber').value;
    
    // You would need to implement a function to fetch student details from a backend or database based on the student number provided.
    // For this example, we'll use a sample student object.
    const studentDetails = getStudentDetails(studentNumber);
    
    if (studentDetails) {
      // Open a new window with the student details
      const newWindow = window.open('', '_blank');
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Student Details</title>
          <link rel="stylesheet" href="styles.css">
        </head>
        <body>
        <nav>
        <div class="navbar">
          <div class="logo">
            <a href="#">Your Logo</a>
          </div>
          <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div class="burger-menu">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
        </div>
      </nav>
    
      <section class="hero-section">
        <div class="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" class="btn">Learn More</a>
        </div>
      </section>
          <div class="container">
            <h1>Student Details</h1>
            <p><strong>Name:</strong> ${studentDetails.name}</p>
            <p><strong>Matric Number:</strong> ${studentDetails.rollNumber}</p>
            <p><strong>Graduation Session:</strong> ${studentDetails.graduation}</p>
            <p><strong>Course:</strong> ${studentDetails.department}</p>
            <p><strong>Gender:</strong> ${studentDetails.gender}</p>
            <p><strong>Class of Degree:</strong> ${studentDetails.degree}</p>
          </div>
        </body>
        </html>
      `);
      newWindow.document.close();
    } else {
      alert('Student details not found. Please check the student number and try again.');
    }
  }
  
  // Sample function to get student details (replace this with actual data fetching from backend)
  function getStudentDetails(studentNumber) {
    // Sample student object
    const students = [
      { 
       name: 'John Doe',
       rollNumber: 'HEIM/2019/MIT/0017', 
       graduation: '2019/2020', 
       department: 'Computer Science', 
        gender: 'Male',
        degree: 'second class upper'
       },

       { rollNumber: '12345', 
       name: 'John Doe',
        graduation: '2019/2020', 
        degree: 'second class upper', 
        department: 'Computer Science', 
        email: 'john.doe@example.com' },
 
     
      // Add more students here...
    ];
  
    return students.find(student => student.rollNumber === studentNumber);
  }
  
  const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});
