'use strict';

const knowledges = require('./data/abilities/knowledges.json');
const skills = require('./data/abilities/skills.json');
const talents = require('./data/abilities/talents.json');
const backgrounds = require('./data/advantages/backgrounds.json');
const virtues = require('./data/advantages/virtues.json');
const mental = require('./data/attributes/mental.json');
const physical = require('./data/attributes/physical.json');
const social = require('./data/attributes/social.json');
const nature = require('./data/basic/nature.json');
const flaws = require('./data/flaws/index.js');
const merits = require('./data/merits/index.js');
const secondary = require('./data/secondary/index');

module.exports = {
  knowledges,
  skills,
  talents,
  backgrounds,
  virtues,
  mental,
  physical,
  social,
  nature,
  demeanor: nature,
  secondary,
  flaws,
  merits,
};
