# My Reads App

---

## App Description:

The purpose of the App is categorize the books in three categories "Currently Reading", "Want to Read" and "Read".
The user is able to move the book from one category to another, and he can see the changes happen on the screen directly.

The user is able to search for specific books from the search page that he can access through clicking on the search button which exists at the bottom right side.

The user is able to change the book category from the search page as well and when he go back again to the shelves page, he can see the updated books in the correct shelf.

## Running the App

First you need to have NodeJs and git installed on your machine to be able to run the App on your machine.

Once NodeJs and git are installed, go to the directory where you want to clone the app on your machine, then run the following git command:

```
git clone https://github.com/sarah-maris/reactnd-project-myreads.git
```

After the clone process finish, open the App folder and in terminal run the following command to install all the required dependencies to start the App:
```
npm install
```

Once all of the dependencies have been installed you can start the App through this command:

```
npm start
```

A new browser window tab should automatically open which will display the App. If it doesn't, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser to surf the App.

## App usage

- Books are sorted into three categories: "Currently Reading", "Want to Read" and "Read".
- To change the book category or remove a book from the list, click on the green button on the book cover to select the new list.
- To add new books, click on the green + button at the bottom of the page.
  Search for an author's name or subject. Up to 20 items will be returned. Repeat the instructions in the previous step to add the book to a different list.

_Note: The backend API is limited to a fixed set of [search terms](#search-terms) -- see below for valid search terms_

#### Search Terms:

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
