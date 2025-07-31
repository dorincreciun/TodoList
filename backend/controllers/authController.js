const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Generare JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

// Înregistrare utilizator nou
const register = async (req, res) => {
  try {
    const { username, email, password, firstName, lastName } = req.body;

    // Verifică dacă utilizatorul există deja
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Utilizator cu acest email sau username există deja'
      });
    }

    // Creează utilizatorul nou
    const user = new User({
      username,
      email,
      password,
      firstName,
      lastName
    });

    await user.save();

    // Generează token
    const token = generateToken(user._id);

    // Actualizează ultima conectare
    user.lastLogin = new Date();
    await user.save();

    res.status(201).json({
      success: true,
      message: 'Utilizator înregistrat cu succes',
      data: {
        user: user.toPublicJSON(),
        token
      }
    });
  } catch (error) {
    console.error('Eroare înregistrare:', error);
    res.status(500).json({
      success: false,
      message: 'Eroare la înregistrarea utilizatorului'
    });
  }
};

// Autentificare utilizator
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Găsește utilizatorul
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Email sau parolă incorectă'
      });
    }

    // Verifică dacă utilizatorul este activ
    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Contul este dezactivat'
      });
    }

    // Verifică parola
    const isPasswordValid = await user.comparePassword(password);
    
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Email sau parolă incorectă'
      });
    }

    // Generează token
    const token = generateToken(user._id);

    // Actualizează ultima conectare
    user.lastLogin = new Date();
    await user.save();

    res.json({
      success: true,
      message: 'Autentificare reușită',
      data: {
        user: user.toPublicJSON(),
        token
      }
    });
  } catch (error) {
    console.error('Eroare login:', error);
    res.status(500).json({
      success: false,
      message: 'Eroare la autentificare'
    });
  }
};

// Logout (invalidează token-ul pe client)
const logout = async (req, res) => {
  try {
    // În practică, aici ai putea adăuga token-ul într-o blacklist
    // Pentru acest exemplu, doar returnăm un mesaj de succes
    
    res.json({
      success: true,
      message: 'Logout realizat cu succes'
    });
  } catch (error) {
    console.error('Eroare logout:', error);
    res.status(500).json({
      success: false,
      message: 'Eroare la logout'
    });
  }
};

// Obține profilul utilizatorului curent
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    
    res.json({
      success: true,
      data: {
        user: user.toPublicJSON()
      }
    });
  } catch (error) {
    console.error('Eroare obținere profil:', error);
    res.status(500).json({
      success: false,
      message: 'Eroare la obținerea profilului'
    });
  }
};

// Actualizează profilul utilizatorului
const updateProfile = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    
    const updateData = {};
    if (firstName) updateData.firstName = firstName;
    if (lastName) updateData.lastName = lastName;
    if (email) updateData.email = email;

    // Verifică dacă email-ul nou există deja
    if (email && email !== req.user.email) {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: 'Email-ul este deja folosit de alt utilizator'
        });
      }
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      updateData,
      { new: true, runValidators: true }
    ).select('-password');

    res.json({
      success: true,
      message: 'Profil actualizat cu succes',
      data: {
        user: user.toPublicJSON()
      }
    });
  } catch (error) {
    console.error('Eroare actualizare profil:', error);
    res.status(500).json({
      success: false,
      message: 'Eroare la actualizarea profilului'
    });
  }
};

// Schimbă parola
const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user._id);
    
    // Verifică parola curentă
    const isCurrentPasswordValid = await user.comparePassword(currentPassword);
    
    if (!isCurrentPasswordValid) {
      return res.status(400).json({
        success: false,
        message: 'Parola curentă este incorectă'
      });
    }

    // Actualizează parola
    user.password = newPassword;
    await user.save();

    res.json({
      success: true,
      message: 'Parola schimbată cu succes'
    });
  } catch (error) {
    console.error('Eroare schimbare parolă:', error);
    res.status(500).json({
      success: false,
      message: 'Eroare la schimbarea parolei'
    });
  }
};

module.exports = {
  register,
  login,
  logout,
  getProfile,
  updateProfile,
  changePassword
}; 