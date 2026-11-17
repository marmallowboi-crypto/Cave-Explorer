
let player;

// Player movement speed.
const PLAYER_SPEED = 3;

/*
Original starter example:
Author: Quinton Ashley
Source: https://p5play.org/learn/sprite.html
Section: Sprite tutorial - Box example

The following movement and boundary code was developed
with assistance from OpenAI ChatGPT.
Source: https://chatgpt.com/
Date: November 16, 2026

BEGINNING of new modifications
*/

function setup() {
    // Create a larger game canvas.
    new Canvas(500, 350);

    // Create the player sprite in the center.
    player = new Sprite(250, 175, 40, 40);

    // Customize the player's appearance.
    player.color = '#58d68d';
    player.stroke = '#145a32';

    // Disable physics forces for direct keyboard movement.
    player.physics = 'none';
}

function update() {
    clear();

    // Reset movement before checking keyboard input.
    player.vel.x = 0;
    player.vel.y = 0;

    // Horizontal movement.
    if (kb.pressing('left')) {
        player.vel.x = -PLAYER_SPEED;
    } else if (kb.pressing('right')) {
        player.vel.x = PLAYER_SPEED;
    }

    // Vertical movement.
    if (kb.pressing('up')) {
        player.vel.y = -PLAYER_SPEED;
    } else if (kb.pressing('down')) {
        player.vel.y = PLAYER_SPEED;
    }

    // Keep the player inside the canvas.
    player.x = constrain(player.x, 20, 480);
    player.y = constrain(player.y, 20, 330);
}

/* END of new modifications */
