import pandas as pd
from matplotlib import pyplot as plt
import numpy as np
from ast import literal_eval
from scipy.stats import pearsonr
from personality import Personality

CoinsPerLevel = [77, 0, 51, 41, 70, 21, 54, 0, 0, 41, 52, 0]
PowerupsPerLevel = [1, 0, 5, 2, 6, 1, 0, 0, 0, 6, 8, 0]
EnemiesPerLevel = [17, 0, 6, 10, 14, 30, 27, 0, 13, 0, 0, 0]

def getPersonalityElementsFromDataFrame(df, elem_col):
    elements = []

    for elem in pd.DataFrame(df, columns=[elem_col]).values:
        elements.append(elem[0])

    return elements

    
def getElementsFromDataFrame(df, elem_col):
    elements = []

    for elem in pd.DataFrame(df, columns=[elem_col]).values:
        elements += literal_eval(elem[0])

    return elements

def plot(df, elem_col, num_elems, plot_title, x_label):
    element = getElementsFromDataFrame(df, elem_col)

    bins = []
    for i in range(1, num_elems + 1):
        bins += [i]

    _, ax = plt.subplots(figsize =(20, 8))
    ax.hist(np.array(element), bins = bins, rwidth=0.75, align='left')
    ax.set_title(plot_title)
    ax.set_xlabel(x_label)
    ax.set_ylabel('Number of Players')

    return element

def createPersonality(df):
    extraversion = getPersonalityElementsFromDataFrame(df, 'Extraversion') 
    aggreableness = getPersonalityElementsFromDataFrame(df, 'Agreeableness')
    conscientiousness = getPersonalityElementsFromDataFrame(df, 'Conscientiousness')
    neuroticism = getPersonalityElementsFromDataFrame(df, 'Neuroticism')
    openness = getPersonalityElementsFromDataFrame(df, 'Openness')

    return Personality(extraversion, aggreableness, conscientiousness, neuroticism, openness)

def correlateElementsAndTraits(df, Level, elem_col, noElems, personality):
    elements = []
    for i in range(0, noElems):
        elements.append([])

    frame = pd.DataFrame(df, columns=[elem_col]).values
    for elem in frame:
        elems = literal_eval(elem[0])
        for j in range(0, noElems):
            elements[j].append(1 if (j in elems) else 0)

    for i in range(0, noElems):
        corrE, _ = pearsonr(personality.extraversion, elements[i])
        corrA, _ = pearsonr(personality.aggreableness, elements[i])
        corrC, _ = pearsonr(personality.conscientiousness, elements[i])
        corrN, _ = pearsonr(personality.neuroticism, elements[i])
        corrO, _ = pearsonr(personality.openness, elements[i])

        print("Level-{} {}-{}: {}; {}; {}; {}; {}".format(Level, elem_col, i, corrE, corrA, corrC, corrN, corrO))

demographics = pd.read_excel(r'First Prototype.xlsx', sheet_name='Demographics').drop_duplicates(['GUID'], keep='last')

for Level in range(1, 13):
    level_data = pd.read_excel(r'First Prototype.xlsx', sheet_name='Level_{}'.format(Level)).drop_duplicates(['GUID'], keep='last')
    df = demographics.merge(level_data)

    p = createPersonality(df) # Personality Traits
 
    if CoinsPerLevel[Level - 1] != 0:
        plot(df, 'collectedCoins', CoinsPerLevel[Level - 1], 'Coins - Level {}'.format(Level), 'Coin ID')
        correlateElementsAndTraits(df, Level, 'collectedCoins', CoinsPerLevel[Level - 1], p)

    if PowerupsPerLevel[Level - 1] != 0:
        plot(df, 'collectedPowerups', PowerupsPerLevel[Level - 1], 'Powerups - Level {}'.format(Level), 'Powerup ID')
        
    if EnemiesPerLevel[Level - 1] != 0:
        plot(df, 'killedEnemies', EnemiesPerLevel[Level - 1], 'Enemies - Level {}'.format(Level), 'Enemy ID')


# Show plot
plt.show()