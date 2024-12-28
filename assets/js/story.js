const invalidEntry = "Invalid Entry, Try again.";
const exitStory = "You exited the story completion.";
const storyInputMsg = "İptal: Exist\nEnter your story:\n";
let story = "Deep in the vast misty forest, a boy was following a quiet whisper. The whisper promised to reveal a forgotten secret. ";


function storyInput() {
  let storyInputText = prompt(`${storyInputMsg} \n ${story}`);

  if (storyInputText === null) {
    return false;
  }

  storyInputText = storyInputText.trim();
  if (!storyInputText) {
    alert(invalidEntry);
    return storyInput();
  }
  return storyInputText;
}

function mainMenu() {

  let result = storyInput();
  if (result === false) {
    alert(exitStory);
    return;
  }

  story += result;
  localStorage.story = story;
  alert(story);
}

mainMenu();