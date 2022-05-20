'use strict'
import {Canvas, Ball, COLORS} from './views';

const canvas = new Canvas(800,600);
const ball = new Ball(COLORS.RED, 20, {x: 200, y:200});
canvas.add(ball);

