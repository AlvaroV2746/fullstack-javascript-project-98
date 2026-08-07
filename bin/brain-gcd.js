#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { bienvenida } from '../src/cli.js';
import gcd from '../src/games/gcd.js'

const name = bienvenida();
gcd(name);