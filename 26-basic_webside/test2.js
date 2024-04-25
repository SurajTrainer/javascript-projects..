// In a real scenario, you'd fetch blog posts from a server/database
const blogPosts = [
    { title: 'First Blog Post', content: 'This is the content of the first post.' },
    { title: 'Second Blog Post', content: 'This is the content of the second post.' },
    // Add more posts as needed
  ];
  
  const blogPostsSection = document.querySelector('.blog-posts');
  
  // Function to render blog posts
  function renderBlogPosts() {
    blogPosts.forEach(post => {
      const postElement = document.createElement('article');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
      `;
      blogPostsSection.appendChild(postElement);
    });
  }
  
  // Call the function to render initial blog posts
  renderBlogPosts();
  
  function displayResult(message) {
    document.getElementById('result').innerText = message;
  }
  
  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    displayResult(`Generated Random Number: ${randomNumber}`);
  }
  
  function shuffleArray() {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = originalArray.sort(() => Math.random() - 0.5);
    displayResult(`Shuffled Array: ${shuffledArray}`);
  }
  
  function capitalizeString() {
    const sampleString = 'hello world';
    const capitalizedString = sampleString.replace(/\b\w/g, char => char.toUpperCase());
    displayResult(`Capitalized String: ${capitalizedString}`);
  }
  
  function checkPrime() {
    const checkPrime = 17;
    const isPrime = checkPrime > 1 && !Array(checkPrime + 1).fill(true).map((el, i) => {
      if (i < 2) return el = false;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) return el = false;
      }
      return el;
    })[checkPrime];
  
    displayResult(`Is ${checkPrime} prime? ${isPrime}`);
  }
  