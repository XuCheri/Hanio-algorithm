function FindSecondMax(set) {
    let max = set[0],
        secondMax = set[0];
    for (i = 1; i < set.length; i++) {
        if (max < set[i]) {
            secondMax = max;
            max = set[i];
        } else {
            if (secondMax <= set[i]) {
                secondMax = set[i];
            }
        }
    }
    return secondMax;
}

function FindSmallestAndLargest(set) {
    let max = set[0],
        min = set[0];
    for (i = 1; i < set.length; i++) {
        if (max < set[i]) {
            max = set[i];
        }
        if (min > set[i]) {
            min = set[i];
        }
    }
    return [max, min];
}

function polynomial(n, a) {
    let p = a[0],
        i = 1;
    for (i = 1; i <= n; i++) {
        p += a[i] * x;
        if (i == n) {
            return p;
        }
        x *= x;
    }
}