function drawClock() {
    const canvas = document.getElementById('clockCanvas');
    const ctx = canvas.getContext('2d');
    const radius = canvas.width / 2;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw clock face
    ctx.beginPath();
    ctx.arc(radius, radius, radius - 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();

    // Draw clock center
    ctx.beginPath();
    ctx.arc(radius, radius, 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
    ctx.closePath();

    // Get current time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Draw hour hand
    const hourAngle = (hours % 12 + minutes / 60) * 30 * (Math.PI / 180);
    drawHand(ctx, radius * 0.5, hourAngle, 8, '#333');

    // Draw minute hand
    const minuteAngle = (minutes + seconds / 60) * 6 * (Math.PI / 180);
    drawHand(ctx, radius * 0.7, minuteAngle, 5, '#333');

    // Draw second hand
    const secondAngle = seconds * 6 * (Math.PI / 180);
    drawHand(ctx, radius * 0.9, secondAngle, 2, 'red');

    // Update the clock every second
    setTimeout(drawClock, 1000);
}

function drawHand(ctx, length, angle, width, color) {
    ctx.beginPath();
    ctx.moveTo(ctx.canvas.width / 2, ctx.canvas.height / 2);
    const x = ctx.canvas.width / 2 + length * Math.cos(angle - Math.PI / 2);
    const y = ctx.canvas.height / 2 + length * Math.sin(angle - Math.PI / 2);
    ctx.lineTo(x, y);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
    ctx.closePath();
}

// Initial call to draw the clock
drawClock();
