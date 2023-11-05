function ColourgreyChessJS(elid) {
    this.Chessboard = {
        virtualboard: {},
        
        elid: elid,
        board: {
            0: { name: "a8" }, 1: { name: "b8" }, 2: { name: "c8" }, 3: { name: "d8" }, 4: { name: "e8" }, 5: { name: "f8" }, 6: { name: "g8" }, 7: { name: "h8" },
            8: { name: "a7" }, 9: { name: "b7" }, 10: { name: "c7" }, 11: { name: "d7" }, 12: { name: "e7" }, 13: { name: "f7" }, 14: { name: "g7" }, 15: { name: "h7" },
            16: { name: "a6" }, 17: { name: "b6" }, 18: { name: "c6" }, 19: { name: "d6" }, 20: { name: "e6" }, 21: { name: "f6" }, 22: { name: "g6" }, 23: { name: "h6" },
            24: { name: "a5" }, 25: { name: "b5" }, 26: { name: "c5" }, 27: { name: "d5" }, 28: { name: "e5" }, 29: { name: "f5" }, 30: { name: "g5" }, 31: { name: "h5" },
            32: { name: "a4" }, 33: { name: "b4" }, 34: { name: "c4" }, 35: { name: "d4" }, 36: { name: "e4" }, 37: { name: "f4" }, 38: { name: "g4" }, 39: { name: "h4" },
            40: { name: "a3" }, 41: { name: "b3" }, 42: { name: "c3" }, 43: { name: "d3" }, 44: { name: "e3" }, 45: { name: "f3" }, 46: { name: "g3" }, 47: { name: "h3" },
            48: { name: "a2" }, 49: { name: "b2" }, 50: { name: "c2" }, 51: { name: "d2" }, 52: { name: "e2" }, 53: { name: "f2" }, 54: { name: "g2" }, 55: { name: "h2" },
            56: { name: "a1" }, 57: { name: "b1" }, 58: { name: "c1" }, 59: { name: "d1" }, 60: { name: "e1" }, 61: { name: "f1" }, 62: { name: "g1" }, 63: { name: "h1" },
            length: 64,
        },
        positions: {
            a8: 0, a7: 8, a6: 16, a5: 24, a4: 32, a3: 40, a2: 48, a1: 56,
            
            b8: 1, b7: 9, b6: 17, b5: 25, b4: 33, b3: 41, b2: 49, b1: 57,
            
            c8: 2, c7: 10, c6: 18, c5: 26, c4: 34, c3: 42, c2: 50, c1: 58,
            
            d8: 3, d7: 11, d6: 19, d5: 27, d4: 35, d3: 43, d2: 51, d1: 59,
            
            e8: 4, e7: 12, e6: 20, e5: 28, e4: 36, e3: 44, e2: 52, e1: 60,
            
            f8: 5, f7: 13, f6: 21, f5: 29, f4: 37, f3: 45, f2: 53, f1: 61,

            g8: 6, g7: 14, g6: 22, g5: 30, g4: 38, g3: 46, g2: 54, g1: 62,
            
            h8: 7, h7: 15, h6: 23, h5: 31, h4: 39, h3: 47, h2: 55, h1: 63,
        },
        files: {
            a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,
        },
        pgnreader:{
    notes: [
    { t: "!!", m: 5 },
    { t: "!", m: 4 },
    { t: "!?", m: 3 },
    { t: "?!", m: 2 },
    { t: "?", m: 1 },
    { t: "??", m: 0 },
    ],
    gameheader1(pgnstring) {
    var pgnstring1 = pgnstring;
    var pgnheader1 = {};
    var pgnstring2 = pgnstring1.split(`[`);
    for (var i02k9 = 1; i02k9 < pgnstring2.length; i02k9++) {
        var thtv1 = pgnstring2[i02k9];
        var thtv2 = {
        desc: thtv1.split(`"`)[0].replace(`]`, ``),
        v0: thtv1.split(`"`)[1],
        };
        pgnheader1[thtv2.desc] = thtv2.v0;
        if (pgnheader1 == undefined || pgnheader1 == {}) {
        continue;
        } else if (i02k9 == pgnstring2.length - 1) {
        return pgnheader1;
        }
    }
    },
    gamehistory1(pgnstring) {
    var cgf1 = pgnstring.split(`]`)[pgnstring.split(`]`).length - 1];
    
    var kakkakmoves1 = [];
    var spacechar = " ";
    var fullstopchar = ".";
    var ojk = 0;
    var chae1;
    var cgf2 = cgf1;
    for (var ijx = 0; ijx < cgf1.length; ijx++) {
        cgf1 = cgf1.replace("0.", "");
        cgf1 = cgf1.replace("1.", "");
        cgf1 = cgf1.replace("2.", "");
        cgf1 = cgf1.replace("3.", "");
        cgf1 = cgf1.replace("4.", "");
        cgf1 = cgf1.replace("5.", "");
        cgf1 = cgf1.replace("6.", "");
        cgf1 = cgf1.replace("7.", "");
        cgf1 = cgf1.replace("8.", "");
        cgf1 = cgf1.replace("9.", "");
        cgf1 = cgf1.replace(" 0", "");
        cgf1 = cgf1.replace(" 1", "");
        cgf1 = cgf1.replace(" 2", "");
        cgf1 = cgf1.replace(" 3", "");
        cgf1 = cgf1.replace(" 4", "");
        cgf1 = cgf1.replace(" 5", "");
        cgf1 = cgf1.replace(" 6", "");
        cgf1 = cgf1.replace(" 7", "");
        cgf1 = cgf1.replace(" 8", "");
        cgf1 = cgf1.replace(" 9", "");
        cgf1 = cgf1.replace("-1", " 0-1");
        cgf1 = cgf1.replace("-0", " 1-0");
        cgf1 = cgf1.replace("  ", " ");
        cgf1 = cgf1.replace(" {", "{");
        cgf1 = cgf1.replace("} ", "} ");
        
        if (ijx == cgf1.length - 1) {
            for (var i = 0; i < cgf1.length; i++) {
                if (cgf1[i] == spacechar) {
            var avv = true;
            var sijak123 = i;
            for (var n = i + 1; n < cgf1.length; n++) {
            if (cgf1[n] == " ") {
                var kkut123 = n;

                kakkakmoves1[ojk] = cgf1.slice(i + 1, n);
                
                ojk = ojk + 1;
                break;
                }
            }
            }
            if (kakkakmoves1 == []) {
            continue;
            } else if (i == cgf1.length - 1) {
            return kakkakmoves1;
            }
        }
        } else {
        continue;
    }
    }
    },
    gamehistory12(pgnstring) {
    var cgf1 = pgnstring.split(`]`)[pgnstring.split(`]`).length - 1];
    
    var kakkakmoves1 = [];
    var spacechar = " ";
    var fullstopchar = ".";
    var ojk = 0;
    var chae1;
    var cgf2 = cgf1;
    for (var ijx = 0; ijx < cgf1.length; ijx++) {
        cgf1 = cgf1.replace("0.", "");
        cgf1 = cgf1.replace("1.", "");
        cgf1 = cgf1.replace("2.", "");
        cgf1 = cgf1.replace("3.", "");
        cgf1 = cgf1.replace("4.", "");
        cgf1 = cgf1.replace("5.", "");
        cgf1 = cgf1.replace("6.", "");
        cgf1 = cgf1.replace("7.", "");
        cgf1 = cgf1.replace("8.", "");
        cgf1 = cgf1.replace("9.", "");
        cgf1 = cgf1.replace(" 0", "");
        cgf1 = cgf1.replace(" 1", "");
        cgf1 = cgf1.replace(" 2", "");
        cgf1 = cgf1.replace(" 3", "");
        cgf1 = cgf1.replace(" 4", "");
        cgf1 = cgf1.replace(" 5", "");
        cgf1 = cgf1.replace(" 6", "");
        cgf1 = cgf1.replace(" 7", "");
        cgf1 = cgf1.replace(" 8", "");
        cgf1 = cgf1.replace(" 9", "");
        cgf1 = cgf1.replace("!", "");
        cgf1 = cgf1.replace("?", "");
        cgf1 = cgf1.replace("-1", " 0-1");
        cgf1 = cgf1.replace("-0", " 1-0");
        cgf1 = cgf1.replace("  ", " ");
        cgf1 = cgf1.replace("   ", " ");
        cgf1 = cgf1.replace(" {", "{");
        cgf1 = cgf1.replace("} ", "} ");
        
        if (ijx == cgf1.length - 1) {
        for (var i = 0; i < cgf1.length; i++) {
            if (cgf1[i] == spacechar) {
            var avv = true;
            var sijak123 = i;
            for (var n = i + 1; n < cgf1.length; n++) {
                if (cgf1[n] == " ") {
                var kkut123 = n;

                kakkakmoves1[ojk] = cgf1
                    .slice(i + 1, n)
                    .replace(/{(.*)}/g, ``)
                    .replace("  ", " ");
                
                ojk = ojk + 1;
                break;
                }
            }
            }
            if (kakkakmoves1 == []) {
            continue;
            } else if (i == cgf1.length - 1) {
            return kakkakmoves1;
            }
        }
        } else {
        continue;
        }
    }
    },
    rtnotes(pgn555) {
    var pgnstring6 = this.gamehistory1(pgn555);
    
    var valtoreturn = [];
    for (var i = 0; i < pgnstring6.length; i++) {
        for (var kkklll = 0; kkklll < this.notes.length; kkklll++) {
            if (pgnstring6[i].includes("!")) {
            if (pgnstring6[i].includes("!!")) {
            valtoreturn[i] = 5;
            } else if (pgnstring6[i].includes("?!")) {
            valtoreturn[i] = 2;
            } else if (pgnstring6[i].includes("!?")) {
            valtoreturn[i] = 3;
            } else {
            valtoreturn[i] = 4;
            }
        } else if (pgnstring6[i].includes("?")) {
            if (pgnstring6[i].includes("??")) {
            valtoreturn[i] = 0;
            } else if (pgnstring6[i].includes("?!")) {
            valtoreturn[i] = 2;
            } else if (pgnstring6[i].includes("!?")) {
            valtoreturn[i] = 3;
            } else {
            valtoreturn[i] = 1;
            }
        } else {
            valtoreturn[i] = 6;
        }
        if (i == pgnstring6.length - 1) {
            if (kkklll == this.notes.length - 1) {
            return valtoreturn;
            }
        } else {
            continue;
        }
        }
    }
    },
    rtcomments(pgn555) {
    var pgnstring6 = this.gamehistory1(pgn555);
    
    var valtoreturn5 = [];
    for (var i13 = 0; i13 < pgnstring6.length; i13++) {
        if (pgnstring6[i13].includes("{")) {
        valtoreturn5[i13] = pgnstring6[i13]
            .replace(/{(.*)}/g, /$1/)
        .replaceAll(`/`, ``)
        .replace(/.*{/g, ``)
            .replace(/}.*/g, ``);
        } else {
        valtoreturn5[i13] = "";
        }

        if (i13 == pgnstring6.length - 1) {
        return valtoreturn5;
        } else {
            continue;
        }
        }
    },
    rtparsedpgn(pgnstring5) {
    return {
        headerofgame: this.gameheader1(pgnstring5),
        gamehistorywr: this.gamehistory12(pgnstring5),
        notes: this.rtnotes(pgnstring5),
        comments: this.rtcomments(pgnstring5),
        };
        },
        },
        movehistory:[],
        movepos() {
            for (var i = 0; i < this.cpieces.length; i++) {
                if(this.cpieces[i].isonboardnow == 1){
                    this.cpieces[i].piecepos.pos = this.board[this.cpieces[i].cpos].name;
                }
            }
        },
        
        showinhtml(){},
        pieces: {
            pawn: {
            },
            knight: {},
            bishop: {},
            queen: {},
            king: {},
            rook: {},
        },
        sides: {
            white: {
                piecesthatleave: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                king:15,

            },
            black: {
                piecesthatleave: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                king:31,
            }
        },
        turn:"white",
        cpieces: [
            { piecename: "pawn", piecepos: { file: "a", rank: "2", pos: "a2" }, colour: "white", cpos: 48, shortname: "wp", nameforpgn: "a", nameforfen: "P", pawn: {}, isonboardnow: 1, upiecename: 0, },
            { piecename: "pawn", piecepos: { file: "b", rank: "2", pos: "b2" }, colour: "white", cpos: 49, shortname: "wp", nameforpgn: "b", nameforfen: "P", pawn: {}, isonboardnow: 1, upiecename: 1, },
            { piecename: "pawn", piecepos: { file: "c", rank: "2", pos: "c2" }, colour: "white", cpos: 50, shortname: "wp", nameforpgn: "c", nameforfen: "P", pawn: {}, isonboardnow: 1, upiecename: 2, },
            { piecename: "pawn", piecepos: { file: "d", rank: "2", pos: "d2" }, colour: "white", cpos: 51, shortname: "wp", nameforpgn: "d", nameforfen: "P", pawn: {}, isonboardnow: 1, upiecename: 3, },
            { piecename: "pawn", piecepos: { file: "e", rank: "2", pos: "e2" }, colour: "white", cpos: 52, shortname: "wp", nameforpgn: "e", nameforfen: "P", pawn: {}, isonboardnow: 1, upiecename: 4, },
            { piecename: "pawn", piecepos: { file: "f", rank: "2", pos: "f2" }, colour: "white", cpos: 53, shortname: "wp", nameforpgn: "f", nameforfen: "P", pawn: {}, isonboardnow: 1, upiecename: 5, },
            { piecename: "pawn", piecepos: { file: "g", rank: "2", pos: "g2" }, colour: "white", cpos: 54, shortname: "wp", nameforpgn: "g", nameforfen: "P", pawn: {}, isonboardnow: 1, upiecename: 6, },
            { piecename: "pawn", piecepos: { file: "h", rank: "2", pos: "h2" }, colour: "white", cpos: 55, shortname: "wp", nameforpgn: "h", nameforfen: "P", pawn: {}, isonboardnow: 1, upiecename: 7, },
            { piecename: "rook", piecepos: { file: "a", rank: "1", pos: "a1" }, colour: "white", cpos: 56, shortname: "wr", nameforpgn: "R", nameforfen: "R", rook: {}, isonboardnow: 1, upiecename: 8, },
            { piecename: "rook", piecepos: { file: "h", rank: "1", pos: "h1" }, colour: "white", cpos: 63, shortname: "wr", nameforpgn: "R", nameforfen: "R", rook: {}, isonboardnow: 1, upiecename: 9, },
            { piecename: "knight", piecepos: { file: "b", rank: "1", pos: "b1" }, colour: "white", cpos: 57, shortname: "wn", nameforpgn: "N", nameforfen: "N", knight: {}, isonboardnow: 1, upiecename: 10, },
            { piecename: "knight", piecepos: { file: "g", rank: "1", pos: "g1" }, colour: "white", cpos: 62, shortname: "wn", nameforpgn: "N", nameforfen: "N", knight: {}, isonboardnow: 1, upiecename: 11, },
            { piecename: "bishop", piecepos: { file: "c", rank: "1", pos: "c1" }, colour: "white", cpos: 58, shortname: "wb", nameforpgn: "B", nameforfen: "B", bishop: {}, isonboardnow: 1, upiecename: 12, },
            { piecename: "bishop", piecepos: { file: "f", rank: "1", pos: "f1" }, colour: "white", cpos: 61, shortname: "wb", nameforpgn: "B", nameforfen: "B", bishop: {}, isonboardnow: 1, upiecename: 13, },
            { piecename: "queen", piecepos: { file: "d", rank: "1", pos: "d1" }, colour: "white", cpos: 59, shortname: "wq", nameforpgn: "Q", nameforfen: "Q", queen: {}, isonboardnow: 1, upiecename: 14, },
            { piecename: "king", piecepos: { file: "e", rank: "1", pos: "e1" }, colour: "white", cpos: 60, shortname: "wk", nameforpgn: "K", nameforfen: "K", king: {}, isonboardnow: 1, upiecename: 15, },
                    
                
            { piecename: "pawn", piecepos: { file: "a", rank: "7", pos:"a7"}, colour: "black", cpos: 8, shortname: "bp", nameforpgn: "a", nameforfen: "p", pawn: {}, isonboardnow: 1, upiecename: 16, },
            { piecename: "pawn", piecepos: { file: "b", rank: "7",pos:"b7", }, colour: "black", cpos: 9, shortname: "bp", nameforpgn: "b", nameforfen: "p", pawn: {}, isonboardnow: 1, upiecename: 17, },
            { piecename: "pawn", piecepos: { file: "c", rank: "7" ,pos:"c7",}, colour: "black", cpos: 10, shortname: "bp", nameforpgn: "c", nameforfen: "p", pawn: {}, isonboardnow: 1, upiecename: 18, },
            { piecename: "pawn", piecepos: { file: "d", rank: "7" ,pos:"d7",}, colour: "black", cpos: 11, shortname: "bp", nameforpgn: "d", nameforfen: "p", pawn: {}, isonboardnow: 1, upiecename: 19, },
            { piecename: "pawn", piecepos: { file: "e", rank: "7" ,pos:"e7",}, colour: "black", cpos: 12, shortname: "bp", nameforpgn: "e", nameforfen: "p", pawn: {}, isonboardnow: 1, upiecename: 20, },
            { piecename: "pawn", piecepos: { file: "f", rank: "7" ,pos:"f7",}, colour: "black", cpos: 13, shortname: "bp", nameforpgn: "f", nameforfen: "p", pawn: {}, isonboardnow: 1, upiecename: 21, },
            { piecename: "pawn", piecepos: { file: "g", rank: "7",pos:"g7", }, colour: "black", cpos: 14, shortname: "bp", nameforpgn: "g", nameforfen: "p", pawn: {}, isonboardnow: 1, upiecename: 22, },
            { piecename: "pawn", piecepos: { file: "h", rank: "7" ,pos:"h7",}, colour: "black", cpos: 15, shortname: "bp", nameforpgn: "h", nameforfen: "p", pawn: {}, isonboardnow: 1, upiecename: 23, },
            { piecename: "rook", piecepos: { file: "a", rank: "8" ,pos:"a8",}, colour: "black", cpos: 0, shortname: "br", nameforpgn: "R", nameforfen: "r", rook: {}, isonboardnow: 1, upiecename: 24, },
            { piecename: "rook", piecepos: { file: "h", rank: "8" ,pos:"h8",}, colour: "black", cpos: 7, shortname: "br", nameforpgn: "R", nameforfen: "r", rook: {}, isonboardnow: 1, upiecename: 25, },
            { piecename: "knight", piecepos: { file: "b", rank: "8" ,pos:"b8",}, colour: "black", cpos: 1, shortname: "bn", nameforpgn: "N", nameforfen: "n", knight: {}, isonboardnow: 1, upiecename: 26 },
            { piecename: "knight", piecepos: { file: "g", rank: "8",pos:"g8", }, colour: "black", cpos: 6, shortname: "bn", nameforpgn: "N", nameforfen: "n", knight: {}, isonboardnow: 1, upiecename: 27, },
            { piecename: "bishop", piecepos: { file: "c", rank: "8" ,pos:"c8",}, colour: "black", cpos: 2, shortname: "bb", nameforpgn: "B", nameforfen: "b", bishop: {}, isonboardnow: 1, upiecename: 28, },
            { piecename: "bishop", piecepos: { file: "f", rank: "8" ,pos:"f8",}, colour: "black", cpos: 5, shortname: "bb", nameforpgn: "B", nameforfen: "b", bishop: {}, isonboardnow: 1, upiecename: 29, },
            { piecename: "queen", piecepos: { file: "d", rank: "8" ,pos:"d8",}, colour: "black", cpos: 3, shortname: "bq", nameforpgn: "Q", nameforfen: "q", queen: {}, isonboardnow: 1, upiecename: 30, },
            { piecename: "king", piecepos: { file: "e", rank: "8" ,pos:"e8",}, colour: "black", cpos: 4, shortname: "bk", nameforpgn: "K", nameforfen: "k", king: {}, isonboardnow: 1, upiecename: 31, },
            
        ],
        capturedpieces:[],
        moverules() {
            return {
                pawnmove(piece, board) {
                    var moves_t_y_c_m = [];
                    if (piece.colour == "white") {
                        if (piece.cpos - 8 >= 0) {
                            if (!board[piece.cpos - 8].piece) {
                                if (piece.cpos - 8 < 8) {
                                    moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos - 8, pawn: { promotion: true }, capturing:0, piece: piece, };
                                } else {
                                    moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos - 8, pawn: { promotion: false }, capturing:0, piece: piece, };
                                }
                                
                            }
                        }
                        if (0 <= piece.cpos - 7 < Math.floor(piece.cpos / 8) * 8) {
                            if (board[piece.cpos - 7].piece) {
                                if (board[piece.cpos - 7].piece.piecename != "king" && board[piece.cpos - 7].piece.colour != piece.colour) {
                                    if (piece.cpos - 7 < 8) {
                                        moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos - 7, pawn: { promotion: true }, capturing:1, piece: piece, };
                                    } else {
                                        moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos - 7, pawn: { promotion: false }, capturing:1, piece: piece, };
                                    }
                                } else if (board[piece.cpos-7].piece.piecename =="king" && board[piece.cpos - 7].piece.colour != piece.colour){
                                    moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:piece.cpos-7,pawn:{promotion:(piece.cpos - 7 < 8)?true:false},capturing:2,piece:piece,}
                                }
                                
                            }
                        }
                        if (piece.cpos - 9 >= (Math.floor(piece.cpos / 8) - 2) * 8) {
                            if (board[piece.cpos - 9].piece) {
                                if (board[piece.cpos - 9].piece.piecename != "king" && board[piece.cpos - 9].piece.colour != piece.colour) {
                                    if (piece.cpos - 9 < 8) {
                                        moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos - 9, pawn: { promotion: true }, capturing:1, piece: piece, };
                                    } else {
                                        moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos - 9, pawn: { promotion: false }, capturing:1, piece: piece, };
                                    }
                                }
                                else if (board[piece.cpos-9].piece.piecename =="king" && board[piece.cpos-9].piece.colour != piece.colour){
                                    moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:piece.cpos-9,pawn:{promotion:(piece.cpos - 9 < 8)?true:false},capturing:2,piece:piece,}
                                }
                            }
                        }
                        if (Math.floor(piece.cpos / 8) == 6) {
                            if (!board[piece.cpos - 16].piece && !board[piece.cpos - 8].piece) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos - 16, pawn: { promotion: false }, capturing:0, piece: piece };
                            }
                        }
                    }
                    if (piece.colour == "black") {
                        if (piece.cpos + 8 <= 63) {
                            if (!board[piece.cpos + 8].piece) {
                                if (piece.cpos + 8 > 55) {
                                    moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos + 8, pawn: { promotion: true }, capturing:0, piece: piece, };
                                } else {
                                    moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos + 8, piece: piece, pawn: {promotion: false, }, capturing:0 };
                                }
                                
                            }
                        }
                        if (63 >= piece.cpos + 7 && piece.cpos + 7 >= (Math.floor(piece.cpos / 8) + 1) * 8) {
                            if (board[piece.cpos + 7].piece) {
                                if (board[piece.cpos + 7].piece.piecename != "king" && board[piece.cpos + 7].piece.colour != piece.colour) {
                                    if (piece.cpos + 7 > 55) {
                                        moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos + 7, pawn: { promotion: true }, capturing:1, piece: piece, };
                                    } else {
                                        moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos + 7, pawn: { promotion: false }, capturing:1, piece: piece, };
                                    }
                                }
                                else if (board[piece.cpos+7].piece.piecename =="king" && board[piece.cpos+7].piece.colour != piece.colour){
                                    moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:piece.cpos+7,pawn:{promotion:(piece.cpos +7 > 55)?true:false},capturing:2,piece:piece,}
                                }
                            }
                        }
                        if (63 >= piece.cpos + 9 && piece.cpos + 9 < (Math.floor(piece.cpos / 8) + 2) * 8) {
                            if (board[piece.cpos + 9].piece) {
                                if (board[piece.cpos + 9].piece.piecename != "king" && board[piece.cpos + 9].piece.colour != piece.colour) {
                                    if (piece.cpos + 9 > 55) {
                                        moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos + 9, pawn: { promotion: true }, capturing:1, piece: piece, };
                                    } else {
                                        moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos + 9, pawn: { promotion: false }, capturing:1, piece: piece, };
                                    }
                                }else if (board[piece.cpos+9].piece.piecename =="king" && board[piece.cpos+9].piece.colour != piece.colour){
                                    moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:piece.cpos+7,pawn:{promotion:(piece.cpos +9 > 55)?true:false},capturing:2,piece:piece,}
                                }
                                
                            }
                        }
                        if (Math.floor(piece.cpos / 8) == 1) {
                            if (!board[piece.cpos + 16].piece && !board[piece.cpos + 8].piece) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos + 16, piece: piece, pawn: { promotion: false }, capturing:0 };
                            }
                        }
                    }
                    return moves_t_y_c_m;
                },
                rookmove(piece, board) {
                    var moves_t_y_c_m = [];
                    for (var i = piece.cpos + 1; i < Math.ceil((i - 1) / 8) * 8; i++) {
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, rook: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, rook: {}, capturing:1 };
                                
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,rook:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    for (var i = piece.cpos - 1; i >= Math.floor((i + 1) / 8) * 8; i--) {
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, rook: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, rook: {}, capturing:1 };
                                
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,rook:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    for (var i = piece.cpos - 8; i >= piece.cpos % 8; i -= 8) {
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, rook: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, rook: {}, capturing:1 };
                                
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,rook:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    for (var i = piece.cpos + 8; i <= 56 + piece.cpos % 8; i += 8) {
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, rook: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, rook: {}, capturing:1 };
                                
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,rook:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    return moves_t_y_c_m;
                },
                bishopmove(piece, board) {
                    var moves_t_y_c_m = [];
                    for (var i = piece.cpos + 9; i <= 63 && i < (Math.ceil((i - 9) / 8) + 1) * 8 && (Math.floor(i / 8) * 8) != (Math.floor((i - 9) / 8) * 8); i += 9) {
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, bishop: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, capturing:1, bishop: {} };
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,bishop:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    for (var i = piece.cpos - 9; 0 <= i && i >= (Math.floor((i + 9) / 8) - 1) * 8 && (Math.floor(i / 8) * 8) != (Math.floor((i + 9) / 8) * 8); i -= 9) {
                        
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, bishop: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, capturing:1, bishop: {} };
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,bishop:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    for (var i = piece.cpos + 7; (((i) <= 63) && i >= ((Math.ceil((i - 7) / 8)) * 8)) && (Math.floor(i / 8) * 8) != (Math.floor((i - 7) / 8) * 8); i += 7) {
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, bishop: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, capturing:1, bishop: {} };
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,bishop:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    for (var i = piece.cpos - 7; 0 <= i && i < (Math.floor((i + 7) / 8)) * 8 && (Math.floor(i / 8) * 8) != (Math.floor((i + 7) / 8) * 8); i -= 7) {
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, bishop: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, capturing:1, bishop: {} };
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,bishop:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    return moves_t_y_c_m;
                },
                queenmove(piece, board) {
                    var moves_t_y_c_m = [];
                    for (var i = piece.cpos + 9; i <= 63 && i < (Math.ceil((i - 9) / 8) + 1) * 8 && (Math.floor(i / 8) * 8) != (Math.floor((i - 9) / 8) * 8); i += 9) {
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, queen: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, capturing:1, queen: {} };
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,queen:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    for (var i = piece.cpos - 9; 0 <= i && i >= (Math.floor((i + 9) / 8) - 1) * 8 && (Math.floor(i / 8) * 8) != (Math.floor((i + 9) / 8) * 8); i -= 9) {
                        
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, queen: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, capturing:1, queen: {} };
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,queen:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    for (var i = piece.cpos + 7; (((i) <= 63) && i >= ((Math.ceil((i - 7) / 8)) * 8)) && (Math.floor(i / 8) * 8) != (Math.floor((i - 7) / 8) * 8); i += 7) {

                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, queen: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, capturing:1, queen: {} };
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,queen:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    for (var i = piece.cpos - 7; 0 <= i && i < (Math.floor((i + 7) / 8)) * 8 && (Math.floor(i / 8) * 8) != (Math.floor((i + 7) / 8) * 8); i -= 7) {
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, queen: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, capturing:1, queen: {} };
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,queen:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    for (var i = piece.cpos + 1; i < Math.ceil((i - 1) / 8) * 8; i++) {
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, queen: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, queen: {}, capturing:1 };
                                
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,queen:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    for (var i = piece.cpos - 1; i >= Math.floor((i + 1) / 8) * 8; i--) {
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, queen: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, queen: {}, capturing:1 };
                                
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,queen:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    for (var i = piece.cpos - 8; i >= piece.cpos % 8; i -= 8) {
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, queen: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, queen: {}, capturing:1 };
                                
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,queen:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    for (var i = piece.cpos + 8; i <= 56 + piece.cpos % 8; i += 8) {
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, queen: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, queen: {}, capturing:1 };
                                
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,queen:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    return moves_t_y_c_m;
                },
                knightmove(piece, board) {
                    var moves_t_y_c_m = [];
                    if (63 >= piece.cpos - 8 && piece.cpos - 8 >= 0) {
                        if (piece.cpos - 8 - 7 < Math.floor((piece.cpos - 8) / 8) * 8) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos - 8 - 7, piece: piece, knight: {}, capturing: (!board[piece.cpos - 8 - 7].piece) ? 0 : (board[piece.cpos - 8 - 7].piece.colour != piece.colour) ? (board[piece.cpos - 8 -7].piece.piecename == "king") ? 2 : 1 : 0};
                        }
                        if (piece.cpos - 8 - 9 >= Math.floor(((piece.cpos - 8) / 8) - 1) * 8) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos - 8 - 9, piece: piece, knight: {}, capturing: (!board[piece.cpos - 8 - 9].piece) ? 0 : (board[piece.cpos - 8 - 9].piece.colour != piece.colour) ? (board[piece.cpos - 8 -9].piece.piecename == "king") ? 2 : 1 : 0};
                        }
                    }
                    if (63 >= piece.cpos + 8 && piece.cpos + 8 >=0) {
                        if (piece.cpos + 8 + 7 > Math.ceil((piece.cpos + 8) / 8) * 8) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos + 8 + 7, piece: piece, knight: {},capturing: (!board[piece.cpos + 8 + 7].piece) ? 0 : (board[piece.cpos + 8 + 7].piece.colour != piece.colour) ? (board[piece.cpos + 8 +7].piece.piecename == "king") ? 2 : 1 : 0};
                        }
                        if (piece.cpos + 8 + 9 < Math.ceil(((piece.cpos + 8) / 8) + 1) * 8) {

                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos + 8 + 9, piece: piece, knight: {}, capturing: (!board[piece.cpos +8+9].piece) ? 0 : (board[piece.cpos +8+9].piece.colour != piece.colour) ? (board[piece.cpos + 8 +9].piece.piecename == "king") ? 2 : 1 : 0};
                        }
                    }
                    if (Math.floor(piece.cpos / 8) * 8 <= piece.cpos - 1 && piece.cpos - 1 <= 63) {

                        if (piece.cpos - 1 + 7 >= Math.ceil((piece.cpos - 1) / 8) * 8 && piece.cpos -1 + 7 <= 63) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos - 1 + 7, piece: piece, knight: {},capturing: (!board[piece.cpos -1+7].piece) ? 0 : (board[piece.cpos -1+7].piece.colour != piece.colour) ? (board[piece.cpos -1+7].piece.piecename == "king") ? 2 : 1 : 0};
                        }
                        if (piece.cpos - 1 - 9 >= Math.floor(((piece.cpos - 1) / 8) - 1) * 8 && piece.cpos - 1 - 9 >=0) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos - 1 - 9, piece: piece, knight: {},capturing: (!board[piece.cpos - 1 - 9].piece) ? 0 : (board[piece.cpos - 1 - 9].piece.colour != piece.colour) ? (board[piece.cpos - 1 -9].piece.piecename == "king") ? 2 : 1 : 0 };
                        }
                    }
                    if (Math.ceil(piece.cpos / 8) * 8 > piece.cpos + 1 && piece.cpos + 1 >=0) {
                        
                        if (piece.cpos + 1 - 7 < Math.floor((piece.cpos + 1) / 8) * 8 && piece.cpos + 1 - 7 >=0) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos + 1 - 7, piece: piece, knight: {}, capturing: (!board[piece.cpos +1 - 7].piece) ? 0 : (board[piece.cpos +1 - 7].piece.colour != piece.colour) ? (board[piece.cpos + 1 -7].piece.piecename == "king") ? 2 : 1 : 0 };
                        }
                        if (piece.cpos + 1 + 9 < Math.ceil(((piece.cpos + 1) / 8) + 1) * 8 && piece.cpos + 1 + 9 <=63) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: piece.cpos + 1 + 9, piece: piece, knight: {}, capturing: (!board[piece.cpos + 1 + 9].piece) ? 0 : (board[piece.cpos +1+9].piece.colour != piece.colour) ? (board[piece.cpos + 1 +9].piece.piecename == "king") ? 2 : 1 : 0};
                        }
                    }
                    return moves_t_y_c_m;
                },
                kingmove(piece, board) {
                    var moves_t_y_c_m = [];
                    for (var i = piece.cpos + 9, bbb = true;0<=i&&i < 63 && i < (Math.ceil((i - 9) / 8) + 1) * 8 && bbb; i += 9, bbb = false) {
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, king: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, capturing:1, king: {} };
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,king:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    for (var i = piece.cpos - 9, bbb = true;i < 63 && i >= 0 && i >= (Math.floor((i + 9) / 8) - 1) * 8 && bbb; i -= 9, bbb = false) {

                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, king: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, capturing:1, king: {} };
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,king:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    for (var i = piece.cpos + 7, bbb = true; 0 <=i&& i < 63 && i >= (Math.ceil((i - 7) / 8)) * 8 && bbb; i += 7, bbb = false) {
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, king: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, capturing:1, king: {} };
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,king:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    for (var i = piece.cpos - 7, bbb = true;i < 63 &&  0 <=  i && i < (Math.floor((i + 7) / 8)) * 8 && bbb; i -= 7, bbb = false) {
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, king: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, capturing:1, king: {} };
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,king:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    for (var i = piece.cpos + 1, bbb = true; i < Math.ceil((i - 1) / 8) * 8 && bbb; i++, bbb = false) {
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, king: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, king: {}, capturing:1 };
                                
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,king:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    for (var i = piece.cpos - 1, bbb = true; i >= Math.floor((i + 1) / 8) * 8 && bbb; i--, bbb = false) {
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, king: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, king: {}, capturing:1 };
                                
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,king:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    for (var i = piece.cpos - 8, bbb = true; i >= piece.cpos % 8 && bbb; i -= 8, bbb = false) {
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, king: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, king: {}, capturing:1 };
                                
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,king:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    for (var i = piece.cpos + 8, bbb = true; i <= 56 + piece.cpos % 8 && bbb; i += 8, bbb = false) {
                        if (!board[i].piece) {
                            moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, king: {}, capturing:0 };
                        } else if (board[i].piece) {
                            if (board[i].piece.piecename != "king" && board[i].piece.colour != piece.colour) {
                                moves_t_y_c_m[moves_t_y_c_m.length] = { from: piece.cpos, to: i, piece: piece, king: {}, capturing:1 };
                                
                            } else if (board[i].piece.piecename =="king" && board[i].piece.colour != piece.colour){
                                moves_t_y_c_m[moves_t_y_c_m.length] = {from:piece.cpos,to:i,king:{},capturing:2,piece:piece,}
                            }
                            break;
                        }
                    }
                    return moves_t_y_c_m;
                },
            };
        },

                movepiece(piece, board) {
                    if (piece.piecename == "pawn") {
                        return this.moverules().pawnmove(piece, board);
                    }
                    if (piece.piecename == "rook") {
                        return this.moverules().pawnmove(piece, board);
                    }
                    if (piece.piecename == "queen") {
                        return this.moverules().queenmove(piece, board);
                    }
                    if (piece.piecename == "knight") {
                        return this.moverules().knightmove(piece, board);
                    }
                    if (piece.piecename == "bishop") {
                        return this.moverules().bishopmove(piece, board);
                    }
                    if (piece.piecename == "king") {
                        return this.moverules().kingmove(piece, board);
                    }
                },
                numbertorealmove(move,m) {
                    if (move.capturing == 1) {
                        if (m == "to") {
                        this.cpieces[move.piece.upiecename].cpos = move[m];
                        this.cpieces[move.captpiece.upiecename].isonboardnow = 0;
                            this.board[move[m]].piece = move.piece;
                            
                        this.board[move["from"]].piece = undefined;
                    } else if (m == "from") {
                        this.cpieces[move.piece.upiecename].cpos = move[m];
                        this.cpieces[move.captpiece.upiecename].isonboardnow = 1;
                        this.board[move[m]].piece = move.piece;
                        this.board[move["to"]].piece = move.captpiece;
                            
                        }
                    } else {
                    if (m == "to") {
                        this.cpieces[move.piece.upiecename].cpos = move[m];
                        this.board[move[m]].piece = move.piece;
                        this.board[move["from"]].piece = undefined;
                    } else if (m == "from") {
                        this.cpieces[move.piece.upiecename].cpos = move[m];
                        this.board[move[m]].piece = move.piece;
                        this.board[move["to"]].piece = undefined;
                        }
                    }
                },
                numbertorealmove2(move,m) {
                    
                    if (m == "to") {
                        this.cpieces[move.piece.upiecename].cpos = move[m];
                        this.board[move[m]].piece = move.piece;
                        this.board[move["from"]].piece= undefined;
                    } else if (m == "from") {
                        this.cpieces[move.piece.upiecename].cpos = move[m];
                        this.board[move[m]].piece = move.piece;
                        this.board[move["to"]].piece= undefined;
                    }
                },
                numbertorealmoveand(move) {
                    this.cpieces[move.piece.upiecename].cpos = move.to;
                    this.removepieceonhtml("./img",move.piece.piecepos.pos);
                    this.board[move.from].piece = undefined;
                },
                movesssslll(colour) {
                        var possibleoppmoves = [];
                        var colourmoves = [];
                        for (var i = 0; i < this.cpieces.length; i++){
                            if (this.cpieces[i].colour == colour && this.cpieces[i].isonboardnow == 1) {
                                colourmoves[colourmoves.length] = this.cpieces[i];
                            }
                            if (i == this.cpieces.length - 1) {
                                for (var i1 = 0; i1 < colourmoves.length; i1++) {
                                    for (var i2 = 0; i2 < this.movepiece(colourmoves[i1], this.board).length; i2++) {
                                        possibleoppmoves[possibleoppmoves.length] = this.movepiece(colourmoves[i1], this.board)[i2];
                                    }
                                    
                                }
                            } else {
                                continue;
                            }
                            
                        }
                        return possibleoppmoves;
        },
        movetopgn(move, colour) {
            var rtv = '';
            if (move.piece.piecename == "pawn") {
                rtv[0] = move.piece.piecepos.file;
                if (move.capturing == 1) {
                    rtv+= "x";
                    
                }
                rtv += toString(Math.floor(move.to / 8));
            }
            if (move.piece.piecename == "knight") {
                rtv[0] = move.piece = "N" + move.from;
                if (move.capturing == 1) {
                    rtv+= "x";
                    
                }
                rtv += move.piece.piece.pos;
            }
            if (move.piece.piecename == "rook") {
                rtv[0] = move.piece = "R" + move.from;
                if (move.capturing == 1) {
                    rtv+= "x";
                    
                }
                rtv += move.piece.piece.pos;
            }
            if (move.piece.piecename == "queen") {
                rtv[0] = move.piece = "Q" + move.from;
                if (move.capturing == 1) {
                    rtv+= "x";
                    
                }
                rtv += move.piece.piece.pos;
            }
            if (move.piece.piecename == "bishop") {
                rtv[0] = move.piece = "B" + move.from;
                if (move.capturing == 1) {
                    rtv+= "x";
                    
                }
                rtv += move.piece.piece.pos;
            }
            if (move.piece.piecename == "K") {
                rtv[0] = move.piece = "K" + move.from;
                if (move.capturing == 1) {
                    rtv+= "x";
                    
                }
                rtv += move.piece.piece.pos;
            }
            if (colour == "white") {
                if (this.ischeck(move, "black")) {
                    rtv += "+";
                }
            }
            if (colour == "black") {
                if (this.ischeck(move, "white")) {
                    rtv += "+";
                }
            }
            return rtv;
        },
        arrtxtmethodobj: {

    splitatnumbertxt(text, number) {
    var rtv000 = [
        text.slice(0, number),
        text.slice(number, text.length),
    ];
    return { strarr: rtv000, idx: number };
}
, splitatnumberarr(arr, number) {
    var rtv000 = [arr.slice(0, number - 1), arr.slice(number, arr.length - 1)];
    return { arr: rtv000, idx: number };
}
, splitatnumber(a, number) {
    var rtv000 = [a.slice(0, number - 1), a.slice(number, a.length - 1)];
    return { rtarr: rtv000, idx: number };
}
, splitatnumberbythrpieces(a, number) {
    var rtv000 = [
        a.slice(0, number[0] - 1),
        a.slice(number[0], number[1] - 1),
        a.slice(number[1], a.length - 1),
    ];
    return { rtarr: rtv000, idx: number };
},

        },
        returnopcolour(c) {
            if (c == "black") {
                return "white";
            } else if (c == "white") {
                return "black";
            } else {
                return "asdfgiowernmc6";
            }
        },
        parseparsepgn(pgn, c) {
            var pgnstr01 = new String(pgn);
            var pgnstr0 = pgnstr01.replace(`+`, ``).replace(`#`,``).replace(`!`,``).replace(`?`,``).replace(`!`,``).replace(`?`,``);
            
            var vv = []; //allvv0s함수 안에 있는거랑 다른 vv이므로 실제론 사용되는데 없는 쓸모없는 변수
            var vv0 = []; // 얘도 마찬가지인것같지만...좀 뒤까지 자세히 보면...(VSCODE에서 회색글씨 아님)
            var vv1 = [];
            var vv2 = [];
            var rtv;
                var vv = [];
            var vv0 = [];
            var murumpyo = { to: this.arrtxtmethodobj.splitatnumbertxt(pgnstr0, pgnstr0.length - 2).strarr[1], from: pgnstr0.slice(1, pgnstr0.length - 2).replace(`x`, ``), doesitcapturen: (pgnstr0.includes(`x`)),piecetype:pgnstr0[0] };
            var piecetype = murumpyo.piecetype;
                for (var ijk6665772 = 0; ijk6665772 < this.board.length; ijk6665772++){
                if (this.board[ijk6665772].piece) {
                    if (this.board[ijk6665772].piece.isonboardnow == 1 && this.board[ijk6665772].piece.nameforpgn == piecetype && this.board[ijk6665772].piece.colour == c) {
                        vv[vv.length] = this.board[ijk6665772].piece;
                    }
                    if (ijk6665772 == this.board.length - 1) {
                        for (var issrerrtyx4 = 0; issrerrtyx4 < vv.length; issrerrtyx4++){
                            for (var ijtt = 0; ijtt < this.movepiece(vv[issrerrtyx4], this.board).length; ijtt++) {
                                vv0[vv0.length] = this.movepiece(vv[issrerrtyx4], this.board)[ijtt];
                            }
                        }
                    } else {
                        continue;
                    }
                    }
                    
                }
            
            
            rtv = murumpyo;
            for (var ih = 0; ih < vv0.length; ih++){
                    if (vv0[ih].to == this.positions[murumpyo.to]) {
                        vv1[vv1.length] = vv0[ih];
                    }
            }
            if (murumpyo.from.length == 0) {
                rtv.from = this.board[vv1[0].from].name;
                
            } else if (murumpyo.from.length == 1) {
                if (Number(murumpyo.from) == NaN) {
                    rtv.from = murumpyo.from + vv1[0][1];
                } else {
                    rtv.from = vv1[0][0] + murumpyo.from;
                }
            }
            var rrtv = rtv.piecetype + rtv.from + ((rtv.doesitcapturen) ? "x" + rtv.to : rtv.to);
            if (pgnstr0[0] == pgnstr0[0].toLowerCase()) {
                rrtv = pgnstr0;
            }
            return rrtv;
        },
        
        parsedpgntomove(pgn, c) {
            
            var pgnstr = new String(pgn);
            var rtv = {piece:{},from:{},to:{},capturing:0};
            if (pgnstr.length == 2 && pgnstr[0] == pgnstr[0].toLowerCase()) {
                if (c == "white") {
                    if (Math.floor(this.positions[pgnstr] / 8) == 4) {
                        if (this.board[this.positions[pgnstr] + 8].piece) {
                            rtv.from = this.positions[pgnstr] + 8;
                            rtv.piece = this.board[this.positions[pgnstr] + 8].piece;
                        } else if (this.board[this.positions[pgnstr] + 16].piece) {
                            rtv.from = this.positions[pgnstr] + 16;
                            rtv.piece = this.board[this.positions[pgnstr] + 16].piece;
                        }
                    } else {
                        if (this.board[this.positions[pgnstr] + 8].piece) {
                            rtv.from = this.positions[pgnstr] + 8;
                            rtv.piece = this.board[this.positions[pgnstr] + 8].piece;
                        }
                    }
                }
                if (c == "black") {
                    if (Math.floor(this.positions[pgnstr] / 8) == 3) {
                        if (this.board[this.positions[pgnstr] - 8].piece) {
                            rtv.from = this.positions[pgnstr] - 8;
                            rtv.piece = this.board[this.positions[pgnstr] - 8].piece;
                        } else if (this.board[this.positions[pgnstr] - 16].piece) {
                            rtv.from = this.positions[pgnstr] - 16;
                            rtv.piece = this.board[this.positions[pgnstr] - 16].piece;
                        }
                    } else {
                        if (this.board[this.positions[pgnstr] - 8].piece) {
                            rtv.from = this.positions[pgnstr] - 8;
                            rtv.piece = this.board[this.positions[pgnstr] - 8].piece;
                        }
                    }
                }
            } else if (pgnstr.length == "4" && pgnstr[1] == "x" && pgnstr[0] == pgnstr[0].toLowerCase()) {
                if (c == "white") {
                    if (this.files[pgnstr[0]] + 1 == this.files[pgnstr[2]]) {
                        rtv.from = this.positions[pgnstr[2] + pgnstr[3]] - 7;
                        rtv.capturing = 1;
                        rtv.piece = this.board[this.positions[pgnstr[2] + pgnstr[3]]].piece;
                    }
                    if (this.files[pgnstr[0]] - 1 == this.files[pgnstr[2]]) {
                        rtv.from = this.positions[pgnstr[2] + pgnstr[3]] - 9;
                        rtv.capturing = 1;
                        rtv.piece = this.board[this.positions[pgnstr[2] + pgnstr[3]]].piece;
                    }
                }
                if (c == "black") {
                    if (this.files[pgnstr[0]] + 1 == this.files[pgnstr[2]]) {
                        rtv.from = this.positions[pgnstr[2] + pgnstr[3]] +9;
                        rtv.capturing = 1;
                        rtv.piece = this.board[this.positions[pgnstr[2] + pgnstr[3]]].piece;
                    }
                    if (this.files[pgnstr[0]] - 1 == this.files[pgnstr[2]]) {
                        rtv.from = this.positions[pgnstr[2] + pgnstr[3]] + 7;
                        rtv.capturing = 1;
                        rtv.piece = this.board[this.positions[pgnstr[2] + pgnstr[3]]].piece;
                    }
                }
                
            } else {
                if (!pgnstr.includes("x")) {
                    rtv.piece = this.board[this.positions[pgnstr[1] + pgnstr[2]]].piece;
                    rtv.from = this.positions[pgnstr[1] + pgnstr[2]];
                } else {
                    rtv.from = this.positions[pgnstr[1] + pgnstr[2]];
                    rtv.piece = this.board[this.positions[pgnstr[1] + pgnstr[2]]].piece;
                    rtv.capturing = 1;
                }
            }
            rtv.to = this.positions[pgnstr[pgnstr.length - 2] + pgnstr[pgnstr.length - 1]];
            return rtv;
        },
                movesssslll2(colour) {
                        var possibleoppmoves = [];
                        var colourmoves = [];
                        
                        for (var i6= 0; i6 < this.cpieces.length; i6++){
                            if (this.cpieces[i6].colour == colour) {
                                colourmoves[colourmoves.length] = this.cpieces[i6];
                            }
                            if (i6 == this.cpieces.length - 1) {
                                for (var i14 = 0; i14 < colourmoves.length; i14++) {
                                    for (var i24 = 0; i24 < this.movepiece(colourmoves[i14], this.board).length; i24++) {
                                        possibleoppmoves[possibleoppmoves.length] = this.movepiece(colourmoves[i14], this.board)[i24];
                                    }
                                    
                                }
                            } else {
                                continue;
                            }
                            
                        }
                        return possibleoppmoves;
                    },
                
                ischeck(move,side) {
                    
                    
                    var rtv;
                    if (side == "white") {
                        this.numbertorealmove(move, "to");
                        
                        for (var i = 0; i < this.movesssslll("black").length; i++) {
                            if (this.cpieces[15].cpos == this.movesssslll("black")[i].to) {
                                
                                
                                rtv = true;
                                break;
                            } else 
                                if (i == this.movesssslll("black").length - 1) {
                                    rtv = false;
                                } else {
                                    continue;
                                
                            }
                            
                        }
                        
                        
                    }
                    if (side == "black") {
                        this.numbertorealmove(move, "to");
                        for (var i = 0; i < this.movesssslll("white").length; i++) {
                            if (this.cpieces[31].cpos == this.movesssslll("white")[i].to) {
                                
                                
                                rtv = true;
                                break;
                            } else 
                                if (i == this.movesssslll("white").length - 1) {
                                    rtv = false;
                                } else {
                                    continue;
                                
                            }
                            
                        }
                        
                    }
                    this.numbertorealmove(move, "from");
                    return rtv;
                },
                ischeck2(move,side) {
                    this.numbertorealmove2(move, "to");
                    var rtv;
                    if (side == "white") {
                        for (var i4545 = 0; i4545 < this.movesssslll2("black").length; i4545++) {
                            if (this.cpieces[15].cpos == this.movesssslll2("black")[i4545].to) {
                                rtv = true;
                                
                                this.numbertorealmove2(move, "from");
                                break;
                            } else 
                                if (i == this.movesssslll2("black").length - 1) {
                                    rtv = false;
                                } else {
                                    continue;
                                
                            }
                            
                        }
                        
                        
                    }
                    if (side == "black") {
                        for (var i4545 = 0; i4545 < this.movesssslll2("white").length; i4545++) {
                            if (this.cpieces[31].cpos == this.movesssslll2("white")[i4545].to) {
                                rtv = true;
                                
                                this.numbertorealmove2(move, "from");
                                break;
                            } else 
                                if (i == this.movesssslll2("white").length - 1) {
                                    
                                    rtv = false;
                                } else {
                                    continue;
                                
                            }
                            
                        }
                        
                    }
                    this.numbertorealmove2(move, "from");
                    return rtv;
                },
                movesyoucanmovereal(side){
                    var moves0 = this.movesssslll(side);
                    var rtv = [];
                    for (var i = 0; i < moves0.length; i++){
                        if (!this.ischeck(moves0[i], side)) {
                            rtv[rtv.length] = moves0[i];
                        }
                    }
                    return rtv;
                },
                checklegalmove(move){
                    var rtv;
                    if (move.piece.isonboardnow == 1) {
                    for (var i = 0; i < this.movepiece(move.piece, this.board).length;i++) {

                    
                    if (this.movepiece(move.piece, this.board)[i].from == move.from && this.movepiece(move.piece,this.board)[i].to == move.to) {
                        
                        rtv= true;
                        break;
                    } else if (i < this.movepiece(move.piece,this.board).length - 1) {
                        continue;
                    } else {
                        
                        rtv= false;
                        }
                        }
                    } else {
                        rtv = false;
                    }
                    return rtv;
                },
                move(moveo, side,callback) {
                    var piecethatwashere;
                    if (moveo.captpiece !=undefined) {
                        piecethatwashere = moveo.captpiece;
                        
                    }
                    
                    var piecethatishere = moveo.piece;
                    
                    if (this.turn == side) {
                        if (this.checklegalmove(moveo)) {
                            if (!this.ischeck(moveo, side)) {
                                
                                
                                
                                if (moveo.capturing == 0) {
                                    this.numbertorealmoveand(moveo);
                                    this.board[moveo.to].piece = piecethatishere;
                                    this.movehistory[this.movehistory.length]
                                    callback();
                                } else if (moveo.capturing == 1) {
                                    
                                    
                                    this.capturedpieces[this.capturedpieces.length] = this.cpieces[piecethatwashere.upiecename];
                                    this.cpieces[piecethatwashere.upiecename].cpos = undefined;
                                    this.cpieces[piecethatwashere.upiecename].isonboardnow = 0;
                                    this.board[moveo.to].piece = piecethatishere;
                                    this.numbertorealmoveand(moveo);
                                    this.board[moveo.to].piece = piecethatishere;
                                    callback();
                                    this.movehistory[this.movehistory.length]
                                }
                                
                                //다음 턴을 위해
                                if (side == "white") {
                                    this.turn = "black";
                                } else if (side == "black") {
                                    this.turn = "white";
                                }
                                return moveo;
                            } else {
                                return "체크임"
                            }
                        } else {
                            return"바르지 않다고"
                        }
                        
                    } else {
                        return "바르지 않음"
                    }
                    
                },
                movebypgntxt(pgn){
                    
                    var thisthis = this;
                    var parsedpgn00045 = this.parsedpgntomove(this.parseparsepgn(pgn, this.turn), this.turn);
                    this.move(parsedpgn00045, this.turn, function () { thisthis.movepos(); thisthis.positionofpiece(); });
                },
                movesthatcanasidemove(side){
                    var moves05 = this.movesssslll2(side);
                    var moves06 = moves05;
                    var rtv = [];
                    for (var i4 = 0; i4 < moves06.length; i4++){
                        if (!this.ischeck2(moves06[i4], side)) {
                            rtv[rtv.length] = moves06[i4];
                        }
                    }
                    return rtv;
                },
                ischeckmate(){
                    
                    if (this.movesthatcanasidemove(this.turn).length == 0) {
                        return { mated: true, matedside: this.turn }
                    } else {
                        return {mated:false,matedside:""}
                    };
                },
                setboard(){
                    this.board[8].piece = this.cpieces[16];
                    this.board[9].piece = this.cpieces[17];
                    this.board[10].piece = this.cpieces[18];
                    this.board[11].piece = this.cpieces[19];
                    this.board[12].piece = this.cpieces[20];
                    this.board[13].piece = this.cpieces[21];
                    this.board[14].piece = this.cpieces[22];
                    this.board[15].piece = this.cpieces[23];
                    this.board[0].piece = this.cpieces[24];
                    this.board[7].piece = this.cpieces[25];
                    this.board[1].piece = this.cpieces[26];
                    this.board[6].piece = this.cpieces[27];
                    this.board[2].piece = this.cpieces[28];
                    this.board[5].piece = this.cpieces[29];
                    this.board[3].piece = this.cpieces[30];
                    this.board[4].piece = this.cpieces[31];

                    this.board[48].piece = this.cpieces[0];
                    this.board[49].piece = this.cpieces[1];
                    this.board[50].piece = this.cpieces[2];
                    this.board[51].piece = this.cpieces[3];
                    this.board[52].piece = this.cpieces[4];
                    this.board[53].piece = this.cpieces[5];
                    this.board[54].piece = this.cpieces[6];
                    this.board[55].piece = this.cpieces[7];
                    this.board[56].piece = this.cpieces[8];
                    this.board[63].piece = this.cpieces[9];
                    this.board[57].piece = this.cpieces[10];
                    this.board[62].piece = this.cpieces[11];
                    this.board[58].piece = this.cpieces[12];
                    this.board[61].piece = this.cpieces[13];
                    this.board[59].piece = this.cpieces[14];
                    this.board[60].piece = this.cpieces[15];
                },
                    makeBoard(themepath){
                        if (this.elid == undefined) {
                            var boardel = document.createElement("div")
                            boardel.id = "aaa"
                            boardel.innerHTML = `<div>
                            <div class="rank">
                            <div id="a8" class="lightsquare"></div><div id="b8" class="darksquare"></div><div id="c8" class="lightsquare"></div><div id="d8" class="darksquare"></div><div id="e8" class="lightsquare"></div><div id="f8" class="darksquare"></div><div id="g8" class="lightsquare"></div><div id="h8" class="darksquare"></div>
                            </div>
                            <div class="rank">
                            <div id="a7" class="darksquare"></div><div id="b7" class="lightsquare"></div><div id="c7" class="darksquare"></div><div id="d7" class="lightsquare"></div><div id="e7" class="darksquare"></div><div id="f7" class="lightsquare"></div><div id="g7" class="darksquare"></div><div id="h7" class="lightsquare"></div>
                            </div>
                            <div class="rank">
                            <div id="a6" class="lightsquare"></div><div id="b6" class="darksquare"></div><div id="c6" class="lightsquare"></div><div id="d6" class="darksquare"></div><div id="e6" class="lightsquare"></div><div id="f6" class="darksquare"></div><div id="g6" class="lightsquare"></div><div id="h6" class="darksquare"></div>
                            </div>
                            <div class="rank">
                            <div id="a5" class="darksquare"></div><div id="b5" class="lightsquare"></div><div id="c5" class="darksquare"></div><div id="d5" class="lightsquare"></div><div id="e5" class="darksquare"></div><div id="f5" class="lightsquare"></div><div id="g5" class="darksquare"></div><div id="h5" class="lightsquare"></div>
                            </div>
                            <div class="rank">
                            <div id="a4" class="lightsquare"></div><div id="b4" class="darksquare"></div><div id="c4" class="lightsquare"></div><div id="d4" class="darksquare"></div><div id="e4" class="lightsquare"></div><div id="f4" class="darksquare"></div><div id="g4" class="lightsquare"></div><div id="h4" class="darksquare"></div>
                            </div>
                            <div class="rank">
                            <div id="a3" class="darksquare"></div><div id="b3" class="lightsquare"></div><div id="c3" class="darksquare"></div><div id="d3" class="lightsquare"></div><div id="e3" class="darksquare"></div><div id="f3" class="lightsquare"></div><div id="g3" class="darksquare"></div><div id="h3" class="lightsquare"></div>
                            </div>
                            <div class="rank">
                            <div id="a2" class="lightsquare"></div><div id="b2" class="darksquare"></div><div id="c2" class="lightsquare"></div><div id="d2" class="darksquare"></div><div id="e2" class="lightsquare"></div><div id="f2" class="darksquare"></div><div id="g2" class="lightsquare"></div><div id="h2" class="darksquare"></div>
                            </div>
                            <div class="rank">
                            <div id="a1" class="darksquare"></div><div id="b1" class="lightsquare"></div><div id="c1" class="darksquare"></div><div id="d1" class="lightsquare"></div><div id="e1" class="darksquare"></div><div id="f1" class="lightsquare"></div><div id="g1" class="darksquare"></div><div id="h1" class="lightsquare"></div>
                            </div>
                        </div>`;
                        this.setboard();
                        for (var i = 0; i < this.cpieces.length; i++){
                            this.cpieces[i].html = `<img src="${themepath+"/"+this.cpieces[i].colour+this.cpieces[i].piecename}.png" width="18px" draggable="true" class="chesspiece">`
                        }
                        
                        } else {
                            document.getElementById(this.elid).innerHTML = `<div>
                            <div class="rank">
                            <div id="a8" class="lightsquare"></div><div id="b8" class="darksquare"></div><div id="c8" class="lightsquare"></div><div id="d8" class="darksquare"></div><div id="e8" class="lightsquare"></div><div id="f8" class="darksquare"></div><div id="g8" class="lightsquare"></div><div id="h8" class="darksquare"></div>
                            </div>
                            <div class="rank">
                            <div id="a7" class="darksquare"></div><div id="b7" class="lightsquare"></div><div id="c7" class="darksquare"></div><div id="d7" class="lightsquare"></div><div id="e7" class="darksquare"></div><div id="f7" class="lightsquare"></div><div id="g7" class="darksquare"></div><div id="h7" class="lightsquare"></div>
                            </div>
                            <div class="rank">
                            <div id="a6" class="lightsquare"></div><div id="b6" class="darksquare"></div><div id="c6" class="lightsquare"></div><div id="d6" class="darksquare"></div><div id="e6" class="lightsquare"></div><div id="f6" class="darksquare"></div><div id="g6" class="lightsquare"></div><div id="h6" class="darksquare"></div>
                            </div>
                            <div class="rank">
                            <div id="a5" class="darksquare"></div><div id="b5" class="lightsquare"></div><div id="c5" class="darksquare"></div><div id="d5" class="lightsquare"></div><div id="e5" class="darksquare"></div><div id="f5" class="lightsquare"></div><div id="g5" class="darksquare"></div><div id="h5" class="lightsquare"></div>
                            </div>
                            <div class="rank">
                            <div id="a4" class="lightsquare"></div><div id="b4" class="darksquare"></div><div id="c4" class="lightsquare"></div><div id="d4" class="darksquare"></div><div id="e4" class="lightsquare"></div><div id="f4" class="darksquare"></div><div id="g4" class="lightsquare"></div><div id="h4" class="darksquare"></div>
                            </div>
                            <div class="rank">
                            <div id="a3" class="darksquare"></div><div id="b3" class="lightsquare"></div><div id="c3" class="darksquare"></div><div id="d3" class="lightsquare"></div><div id="e3" class="darksquare"></div><div id="f3" class="lightsquare"></div><div id="g3" class="darksquare"></div><div id="h3" class="lightsquare"></div>
                            </div>
                            <div class="rank">
                            <div id="a2" class="lightsquare"></div><div id="b2" class="darksquare"></div><div id="c2" class="lightsquare"></div><div id="d2" class="darksquare"></div><div id="e2" class="lightsquare"></div><div id="f2" class="darksquare"></div><div id="g2" class="lightsquare"></div><div id="h2" class="darksquare"></div>
                            </div>
                            <div class="rank">
                            <div id="a1" class="darksquare"></div><div id="b1" class="lightsquare"></div><div id="c1" class="darksquare"></div><div id="d1" class="lightsquare"></div><div id="e1" class="darksquare"></div><div id="f1" class="lightsquare"></div><div id="g1" class="darksquare"></div><div id="h1" class="lightsquare"></div>
                            </div>
                        </div>`;
                            this.setboard();
                            for (var i = 0; i < this.cpieces.length; i++) {
                                this.cpieces[i].html = `<img src="${themepath + "/" + this.cpieces[i].colour + this.cpieces[i].piecename}.png" width="36px" draggable="true" class="chesspiece">`
                            }
                        }
                    },
                    setpieces(themepath){
                        this.makeBoard(themepath);
                        
                        this.setboard();
                        for (var i = 0; i < this.board.length; i++) {
                            if (this.board[i].piece) {
                                if (this.board[i].piece.html) {
                                    document.getElementById(this.board[i].name).innerHTML = this.board[i].piece.html;
                                }
                            }
                            
                        }
                        
                    },
                    
                    positionofpiece(themepath){
                        
                        for (var i = 0; i < this.cpieces.length; i++) {
                            if (this.cpieces[i].isonboardnow == 1) {
                                
                                
                                
                                document.getElementById(this.cpieces[i].piecepos.pos).innerHTML = this.cpieces[i].html;
                            }
                        }
                    },
                    positionandsettingpieces(themepath) {
                        this.setpieces(themepath);
                        for (var i = 0; i < this.cpieces.length; i++) {
                            if (this.cpieces[i].isonboardnow == 1) {
                                document.getElementById(this.cpieces[i].piecepos.pos).innerHTML = this.cpieces[i].html;
                            }
                        }
                    },
                    removepieceonhtml(themepath,targetel) {
                        document.getElementById(targetel).innerHTML = "";
                    },
                    movingpieces() {
                        var boardel;
                        if (this.elid == undefined) {
                            if (document.getElementById("aaa") != null) {
                                boardel = document.getElementById("aaa");
                            } else {
                                this.positionandsettingpieces("./img");
                            }
                            
                        } else {
                            boardel = document.getElementById(this.elid);
                        }
                        
                        var chesspieces000 = document.getElementsByClassName("chesspiece");
                        var positions = this.positions;
                        var ddd = this;
                        boardel.addEventListener("dragover", function (e) {
                                e.preventDefault();
                        });
                        boardel.addEventListener("drop", function (e) {
                            
                            
                            e.target.innerHTML = (e.dataTransfer.getData("c"));
                            
                            
                            ddd.move(ddd.board[ddd.positions[e.dataTransfer.getData("piece")]].piece, { from: e.dataTransfer.getData("from"), to: positions[e.target.id] });
                            var a = e.dataTransfer.getData("parentel");
                            a.innerHTML = "";
                        });
                        
                        for (var i = 0; i < chesspieces000.length; i++) {
                chesspieces000[i].addEventListener("dragstart", function (e) {
                    
                    e.dataTransfer.setData("from", e.target.parentElement.id);
                    e.dataTransfer.setData("piece", e.target.parentElement.id);
                    
                    e.dataTransfer.setData("c", e.target.outerHTML);
                    e.dataTransfer.setData("parentel", e.target.parentElement);
                });
            }
        },
        makevirtualboard(b) {
            this.virtualboard= b;
                    },
    }
    
}
