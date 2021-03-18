 const express = require('express');
 const router = express.Router(); 

 const mongoose = require('mongoose');
 const Book = mongoose.model('Book');

 const path = require('path')

/***************** USER HOME REQUESTS ****************/

router.get('/dashboard', (req, res) => {

   return res.render('./layouts/book/home.hbs')
});

router.get('/profile', (req, res) => {

   return res.render('./layouts/book/profile.hbs')
});

router.get('/write-story-cover', (req, res) => {

   return res.render('./layouts/book/write-story-cover.hbs')
});

router.get('/write-story', (req, res) => {

   return res.render('./layouts/book/write-story.hbs')
});

/**
 * 
 * 1. Dashboard ->
 * 
 *  - Show all the published books by users
 *  - User's can read books 
 *  - Navbar -> Profile, Write Book, Logout,
 *  - user can view other user's profile
 * 
 * 2. User Profile ->
 * 
 *  - show all the user's info in a card
 *  - user can update info
 *  - user can delete permanent account
 *  - show user's Book's on Cards
 *  - Navbar -> Dashboard, Write BOOk, Logout  
 *  
 */

module.exports = router;