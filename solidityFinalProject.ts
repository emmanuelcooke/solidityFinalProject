// Handle account creation form submission
document.getElementById("accountForm")?.addEventListener("submit", function(event: Event) {
  event.preventDefault();

  const username = (document.getElementById("username") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement).value;

  // Send account creation request to the backend
  fetch('/api/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => {
    if (response.ok) {
      console.log('Account created successfully!');
      // Clear form inputs
      (event.target as HTMLFormElement).reset();
    } else {
      console.error('Failed to create account');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});


// Handle new project form submission
document.getElementById("projectForm")?.addEventListener("submit", function(event: Event) {
  event.preventDefault();

  const gameName = (document.getElementById("gameName") as HTMLInputElement).value;
  const description = (document.getElementById("description") as HTMLTextAreaElement).value;

  // Send account creation request to the backend
  fetch('/api/project', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ gameName, description })
  })
  .then(response => {
    if (response.ok) {
      console.log('Project created successfully!');
      // Clear form inputs
      (event.target as HTMLFormElement).reset();
    } else {
      console.error('Failed to create project');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});


// Manage High Scores
document.getElementById("highScoreForm")?.addEventListener("submit", function(event: Event) {
  event.preventDefault();

  const gameIdentifier = (document.getElementById("gameIdentifier") as HTMLInputElement).value;
  const playerName = (document.getElementById("playerName") as HTMLInputElement).value;
  const highScore = (document.getElementById("highScore") as HTMLInputElement).value;

  // Send account creation request to the backend
  fetch('/api/highScore', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ gameIdentifier, playerName, highScore })
  })
  .then(response => {
    if (response.ok) {
      console.log('High Score submitted successfully!');
      // Clear form inputs
      (event.target as HTMLFormElement).reset();
    } else {
      console.error('Failed to submit high score');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
