#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { bienvenida } from '../src/cli.js';
import progression from '../src/games/progression.js'

const name = bienvenida();
progression(name);