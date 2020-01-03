# OOJS and SPAs
- How can we use OOJS when building out Single Page Applications?
- Use OOJS to dynamically create the innerHTML of our webpage
  - WHen the page loads, I want to make a get fetch, and display cards on the DOM

### Remember that Pokemon Teams lab?
- Image having an App class, a Trainer class, and a Pokemon class.

- We will create 1 instance of App when the DOM loads
- App will create 8 instances of Trainer
- Each Trainer will create many instance of Pokemon

App.trainers => an Array objects
App.trainers => an Array of Trainer instances


#### We have to make sure we pass the correct data to each instance!

```
<main>
  <div class="card" data-id="1"><p>Prince</p>
    <button data-trainer-id="1">Add Pokemon</button>
    <ul>
      <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
      <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
      <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    </ul>
  </div>
  <div class="card" data-id="2"><p>Dick</p>
    <button data-trainer-id="2">Add Pokemon</button>
    <ul>
      <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
      <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
      <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    </ul>
  </div>
  <div class="card" data-id="3"><p>Garry</p>
    <button data-trainer-id="3">Add Pokemon</button>
    <ul>
      <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
      <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
      <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    </ul>
  </div>
  <div class="card" data-id="4"><p>Jason</p>
    <button data-trainer-id="4">Add Pokemon</button>
    <ul>
      <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
      <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
      <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    </ul>
  </div>
</main>
```
