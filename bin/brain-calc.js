#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { bienvenida } from '../src/cli.js';
import calc from '../src/games/calc.js'

const name = bienvenida();
calc(name);