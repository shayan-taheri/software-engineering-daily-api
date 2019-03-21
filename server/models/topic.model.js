import mongoose from 'mongoose';

const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

// Create schema
const TopicSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  slug: { type: String, slug: 'name', unique: true },
  postCount: { type: Number, default: 0 },
  status: { type: String, default: 'active' }
});

// Export the model
module.exports = mongoose.model('Topic', TopicSchema);
