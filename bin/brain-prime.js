#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { bienvenida } from '../src/cli.js';
import prime from '../src/games/prime.js'

const name = bienvenida();
prime(name);