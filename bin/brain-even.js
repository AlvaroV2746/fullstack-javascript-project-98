#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { bienvenida } from '../src/cli.js';
import even from '../src/games/even.js'

const name = bienvenida();
even(name);