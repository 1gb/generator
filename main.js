$(document).ready(function() {

  var adjectives1 = ['1,000-year-old', '400-year-old', '500-year-old', '700-year-old', 'Aged', 'Aimless', 'Amiable', 'Ancient', 'Angry', 'Armored', 'Artful', 'Banished', 'Bearded', 'Beloved', 'Bespectacled', 'Black', 'Blue', 'Bumbling', 'Callous', 'Chaotic', 'Chivalrous', 'Clairvoyant', 'Clever', 'Clumsy', 'Crazed', 'Curious', 'Cursed', 'Dangerous', 'Dark', 'Deceitful', 'Deranged', 'Distinguished', 'Divine', 'Domestic', 'Drunken', 'Elite', 'Enchanted', 'Enlightened', 'Enraged', 'Erudite', 'Ethereal', 'Evil', 'Exiled', 'Experienced', 'Faithful', 'Fearless', 'Fire-breathing', 'Foolhardy', 'Foolish', 'Fortune-seeking', 'Genial', 'Gentle', 'Glorified', 'Godless', 'Grand', 'Greedy', 'Green', 'Gregarious', 'Heartless', 'Holy', 'Hopeful', 'Immortal', 'Imperial', 'Impressionable', 'Incompetent', 'Infamous', 'Invincible', 'Iridescent', 'Jewel-encrusted', 'Jolly', 'Jovial', 'Lawful', 'Legendary', 'Light', 'Lively', 'Lively', 'Lucky', 'Magical', 'Majestic', 'Manic', 'Meek', 'Milky', 'Mischievous', 'Mystical', 'Mythical', 'Noble', 'Odd', 'Omnipotent', 'Peaceful', 'Petty', 'Proud', 'Psychic', 'Rainbow', 'Rebellious', 'Red', 'Relentless', 'Reluctant', 'Remarkable', 'Renowned', 'Revered', 'Sassy', 'Scaled', 'Scarlet', 'Sea-faring', 'Secret', 'Shimmering', 'Shrill', 'Simple', 'Skilled', 'Solitary', 'Sovereign', 'Speckled', 'Spell-casting', 'Spiteful', 'Staff-wielding', 'Stoic', 'Sword-wielding', 'Supernatural', 'Temperamental', 'Terrible', 'The', 'The Only', 'Treasure-seeking', 'True', 'Truth-seeking', 'Undead', 'Undercover', 'Unlikely', 'Velvet', 'Vengeful', 'Venomous', 'Violet', 'Weathered', 'Whimsical', 'White', 'Wicked', 'Wise', 'Wispy', 'Wistful', 'Wizened', 'Wretched'];

  var adjectives2 = ['Arcane', 'Autumn', 'Bear', 'Bird', 'Blade', 'Blood', 'Bronze', 'Castle', 'Cat', 'Cave', 'Cloud', 'Country', 'Crystal', 'Death', 'Doom', 'Dream', 'Eagle', 'Falcon', 'Feather', 'Field', 'Fire', 'Flame', 'Floral', 'Forest', 'Frog', 'Frost', 'Future', 'Garden', 'Golden', 'Hedge', 'Hill', 'Horse', 'Ice', 'Jasmine', 'Jewel', 'Lake', 'Lightning', 'Miniature', 'Mirage', 'Mist', 'Moon', 'Morning', 'Mountain', 'Mushroom', 'Night', 'Nightmare', 'Orchard', 'Owl', 'Panda', 'Plains', 'Poison', 'Rain', 'Realm', 'Riddle', 'River', 'Rose', 'Science', 'Shadow', 'Shield', 'Silver', 'Sky', 'Smoke', 'Snake', 'Soul', 'Space', 'Spider', 'Spring', 'Stone', 'Storm', 'Sugar', 'Summer', 'Sun', 'Swamp', 'Sword', 'Temporal', 'Thorn', 'Thunder', 'Tiger', 'Temporal', 'Tree', 'Twilight', 'Water', 'Waterfall', 'Wilderness', 'Wildflower', 'Wind', 'Winter', 'Wish'];

  var nouns = ['Adventurer', 'Apprentice', 'Assassin', 'Automaton', 'Bard', 'Blacksmith', 'Champion', 'Child', 'Cleric', 'Collector', 'Commander', 'Defender', 'Demon', 'Diplomat', 'Dragon', 'Elemental', 'Elf', 'Emperor', 'Empress', 'Explorer', 'Faerie', 'Fanatic', 'Gatekeeper', 'Ghost', 'Giant', 'Gladiator', 'Gnome', 'Goblin', 'Godmother', 'Golem', 'Guard', 'Hag', 'Halfling', 'Healer', 'Heretic', 'Hermit', 'Hero', 'Homunculus', 'Human', 'Hunter', 'Imp', 'Inn-keeper', 'Inventor', 'King', 'Knight', 'Lord', 'Manticore', 'Mage', 'Master', 'Minotaur', 'Oathbreaker', 'Oracle', 'Orb', 'Orc', 'Outlaw', 'Paladin', 'Phoenix', 'Pirate', 'Pixie', 'Potion-maker', 'Priest', 'Priestess', 'Prince', 'Princess', 'Prisoner', 'Protector', 'Queen', 'Rogue', 'Sage', 'Scholar', 'Shaman', 'Siren', 'Smuggler', 'Soldier', 'Sorceress', 'Sorceror', 'Spirit', 'Spy', 'Thief', 'Trader', 'Traveler', 'Trickster', 'Troll', 'Undertaker', 'Unicorn', 'Vampire', 'Wanderer', 'Warlock', 'Warrior', 'Werewolf', 'Witch', 'Wizard'];

  $('.result').hide();

  var logo = function() {
    var c = function(ceil) {
      return Math.floor(Math.random() * ceil);
    };

    var rc = function() {
      return c(3) === 1 ? '<rect x="' + c(101) + '" y="' + c(101) + '" width="' + c(101) + '" height="' + c(101) + '" fill="#010b1c" fill-opacity="0.7" stroke="none" />' :  '<circle cx="' + c(101) + '" cy="' + c(101) + '" r="' + c(101) + '" fill="#010b1c" fill-opacity="0.7" stroke="none" />';
    };

    var string = '<svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">' + rc() + '<path d="M ' + c(101) + ' ' + c(101) + ' L ' + c(101) + ' ' + c(101) + ' L ' + c(101) + ' ' + c(101) + ' L ' + c(101) + ' ' + c(101) +
    ' L ' + c(101) + ' ' + c(101) + ' z" fill="#010b1c" fill-opacity="0.7" /></svg>';
    console.log(string);
    return string;
  };

  var brand = function() {
    console.log(adjectives1.length, adjectives2.length, nouns.length);
    return (adjectives1[Math.floor(Math.random() * adjectives1.length)]) + ' ' +
      adjectives2[Math.floor(Math.random() * adjectives2.length)] + ' ' +
      nouns[Math.floor(Math.random() * nouns.length)];
  };

  $('.generate').on('click', function() {
    var name = $('#name').val() === '' ? 'No Name Entered' : $('#name').val();
    $('.result').show();
    $('.username, .title').empty();
    $('.logo').html(logo());
    $('.username').append(name);
    $('.title').append(brand());
  });

  $("#name").keydown(function(e){
    if(e.which === 13){
        $(".generate").click();
    }
  });
});
