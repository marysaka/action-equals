# Hello world javascript action

A dumb action that just check for two values to be equal (hotfix for the if issue with the matrix object).

## Inputs

### `a`

**Required** First input to compare.

### `b`

**Required** Second input to compare.


## Outputs

### `result`

The result of the equal operation

## Example usage

```yaml
name: Test

on: [push]

jobs:
  test:
    name: Test matrix project
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, macOS-latest, windows-latest]
    steps:
    - uses: Thog/action-equals@v1
      id: isUbuntu
      with:
        a: ${{ matrix.os }}
        b: ubuntu-latest
    - name: Only ubuntu-latest
      run: echo "This should only run on Ubuntu latest"
      if: steps.isUbuntu.outputs.result
````