const MAX_LIFE = 100;

class Fighter {
	constructor(name, strength, dexterity, weapon = null, shield = null) {
		this.name = name;
		this.strength = strength;
		this.dexterity = dexterity;
		this.life = MAX_LIFE;
		this.weapon = weapon;
		this.shield = shield;
	}

	// Launch a fight
	fight(defender) {
		const attackPoints = this.getRandomInt(this.getDamage());

		const damages = Math.max(attackPoints - this.getDefense(), 0);

		defender.life = Math.max(defender.life - damages, 0);
	}

	// Generate a random value between 1 and max
	getRandomInt(max) {
		return 1 + Math.floor(Math.random() * max);
	}

	getDamage() {
		return this.strength + (this.weapon?.damage ?? 0);
	}

	getDefense() {
		return this.shield
			? this.shield.protection + this.dexterity
			: this.dexterity;
	}

	// Determine if a fighter is still alive
	isAlive() {
		return this.life > 0;
	}
}

module.exports = Fighter;
