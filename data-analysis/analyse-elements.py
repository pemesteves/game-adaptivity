import pandas as pd
from matplotlib import pyplot as plt
import numpy as np
from ast import literal_eval
from scipy.stats import pearsonr, spearmanr, kendalltau
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
    elements = getElementsFromDataFrame(df, elem_col)
    plot_bins = []
    for i in range(1, num_elems + 2):
        plot_bins.append(i)

    fig, ax = plt.subplots(figsize =(20, 8))
    ax.hist(np.array(elements), bins = plot_bins, rwidth=0.5, align='left')
    ax.set_title(plot_title)
    ax.set_xlabel(x_label)
    ax.set_ylabel('Number of Players')

    fig.savefig('./images/{}'.format(plot_title))

    plt.close(fig)

def createPersonality(df):
    extraversion = getPersonalityElementsFromDataFrame(df, 'Extraversion') 
    aggreableness = getPersonalityElementsFromDataFrame(df, 'Agreeableness')
    conscientiousness = getPersonalityElementsFromDataFrame(df, 'Conscientiousness')
    neuroticism = getPersonalityElementsFromDataFrame(df, 'Neuroticism')
    openness = getPersonalityElementsFromDataFrame(df, 'Openness')

    return Personality(extraversion, aggreableness, conscientiousness, neuroticism, openness)

def pearsonrPersonality(personality, data):
    corrE_P, _ = pearsonr(personality.extraversion, data)
    corrA_P, _ = pearsonr(personality.aggreableness, data)
    corrC_P, _ = pearsonr(personality.conscientiousness, data)
    corrN_P, _ = pearsonr(personality.neuroticism, data)
    corrO_P, _ = pearsonr(personality.openness, data)

    return (corrE_P, corrA_P, corrC_P, corrN_P, corrO_P) if corrE_P >= 0.5 or corrA_P >= 0.5 or corrC_P >= 0.5 or corrN_P >= 0.5 or corrO_P >= 0.5 else (None, None, None, None, None)

def spearmanrPersonality(personality, data):
    corrE_P, _ = spearmanr(personality.extraversion, data)
    corrA_P, _ = spearmanr(personality.aggreableness, data)
    corrC_P, _ = spearmanr(personality.conscientiousness, data)
    corrN_P, _ = spearmanr(personality.neuroticism, data)
    corrO_P, _ = spearmanr(personality.openness, data)

    return (corrE_P, corrA_P, corrC_P, corrN_P, corrO_P) if corrE_P >= 0.5 or corrA_P >= 0.5 or corrC_P >= 0.5 or corrN_P >= 0.5 or corrO_P >= 0.5 else (None, None, None, None, None)
    
def kendalltauPersonality(personality, data):
    corrE_P, _ = kendalltau(personality.extraversion, data)
    corrA_P, _ = kendalltau(personality.aggreableness, data)
    corrC_P, _ = kendalltau(personality.conscientiousness, data)
    corrN_P, _ = kendalltau(personality.neuroticism, data)
    corrO_P, _ = kendalltau(personality.openness, data)

    return (corrE_P, corrA_P, corrC_P, corrN_P, corrO_P) if corrE_P >= 0.5 or corrA_P >= 0.5 or corrC_P >= 0.5 or corrN_P >= 0.5 or corrO_P >= 0.5 else (None, None, None, None, None)

def correlateElementsAndTraits(df, Level, elem_col, noElems, personality):
    elements = []
    for i in range(0, noElems):
        elements.append([])

    frame = pd.DataFrame(df, columns=[elem_col]).values

    # Array with percentage (%) of elements for each person
    people = []
    for elem in frame:
        elems = literal_eval(elem[0])
        for j in range(0, noElems):
            elements[j].append(1 if (j in elems) else 0)
        people.append(len(elems) / noElems)

    # Correlation between personalities and percentage (%) of elements
    peopleE_P, peopleA_P, peopleC_P, peopleN_P, peopleO_P = pearsonrPersonality(personality, people)
    if peopleE_P != None:
        print("PEARSONR: Level-{} {}: {}; {}; {}; {}; {}".format(Level, elem_col, peopleE_P, peopleA_P, peopleC_P, peopleN_P, peopleO_P))

    peopleE_S, peopleA_S, peopleC_S, peopleN_S, peopleO_S = spearmanrPersonality(personality, people)
    if peopleE_S != None:
        print("SPEARMANR: Level-{} {}: {}; {}; {}; {}; {}".format(Level, elem_col, peopleE_S, peopleA_S, peopleC_S, peopleN_S, peopleO_S))

    peopleE_K, peopleA_K, peopleC_K, peopleN_K, peopleO_K = kendalltauPersonality(personality, people)
    if peopleE_K != None:
        print("KENDALLTAU: Level-{} {}: {}; {}; {}; {}; {}".format(Level, elem_col, peopleE_K, peopleA_K, peopleC_K, peopleN_K, peopleO_K))

    # Correlate collection of each element with personalities
    for i in range(0, noElems):
        corrE_P, corrA_P, corrC_P, corrN_P, corrO_P = pearsonrPersonality(personality, elements[i])
        
        if corrE_P != None:
            print("PEARSONR: Level-{} {}-{}: {}; {}; {}; {}; {}".format(Level, elem_col, i, corrE_P, corrA_P, corrC_P, corrN_P, corrO_P))

        corrE_S, corrA_S, corrC_S, corrN_S, corrO_S = spearmanrPersonality(personality, elements[i])

        if corrE_S != None:
            print("SPEARMANR: Level-{} {}-{}: {}; {}; {}; {}; {}".format(Level, elem_col, i, corrE_S, corrA_S, corrC_S, corrN_S, corrO_S))

        corrE_K, corrA_K, corrC_K, corrN_K, corrO_K = kendalltauPersonality(personality, elements[i])
        
        if corrE_K != None:
            print("KENDALLTAU: Level-{} {}-{}: {}; {}; {}; {}; {}".format(Level, elem_col, i, corrE_K, corrA_K, corrC_K, corrN_K, corrO_K))

def correlateTimeLeftOnWinning(df, Level, p):
    causeOfDeath = pd.DataFrame(df, columns=['causeOfDeath']).values
    timeLeft = pd.DataFrame(df, columns=['timeLeft']).values

    _extraversion = []
    _aggreableness = []
    _conscientiousness = []
    _neuroticism = []
    _openness = []
    _timeLeft = []

    for i in range(0, len(causeOfDeath)):
        if causeOfDeath[i] == -1:
            _extraversion.append(p.extraversion[i])
            _aggreableness.append(p.aggreableness[i])
            _conscientiousness.append(p.conscientiousness[i])
            _neuroticism.append(p.neuroticism[i])
            _openness.append(p.openness[i])
            _timeLeft.append(timeLeft[i][0])

    if len(_timeLeft) < 2:
        return

    new_p = Personality(_extraversion, _aggreableness, _conscientiousness, _neuroticism, _openness)
    _e, _a, _c, _n, _p = pearsonrPersonality(new_p, _timeLeft)
    if _e != None:
        print('PEARSONR Time Left, Level {}: {} {} {} {} {}'.format(Level, _e, _a, _c, _n, _p))
    
    _e, _a, _c, _n, _p = spearmanrPersonality(new_p, _timeLeft)
    if _e != None:
        print('SPEARMANR Time Left, Level {}: {} {} {} {} {}'.format(Level, _e, _a, _c, _n, _p))
    
    _e, _a, _c, _n, _p = kendalltauPersonality(new_p, _timeLeft)
    if _e != None:
        print('KENDALLTAU Time Left, Level {}: {} {} {} {} {}'.format(Level, _e, _a, _c, _n, _p))

def removeOutliers(level_data, hasCoins, hasPowerups, hasEnemies):
    if not hasCoins:
        level_data = level_data[level_data.Coins == "Not applicable to the previous level"]

    if not hasPowerups:
        level_data = level_data[level_data.Powerups == "Not applicable to the previous level"]

    if not hasEnemies:
        level_data = level_data[level_data.EnemiesNumber == "Not applicable to the previous level"]
        level_data = level_data[level_data.EnemiesTypes == "Not applicable to the previous level"]

    return level_data

demographics = pd.read_excel(r'First Prototype.xlsx', sheet_name='Demographics').drop_duplicates(['GUID'], keep='last')

for Level in range(1, 13):
    level_data = pd.read_excel(r'First Prototype.xlsx', sheet_name='Level_{}'.format(Level)).drop_duplicates(['GUID'], keep='last')

    level_data_without_outliers = removeOutliers(level_data, CoinsPerLevel[Level - 1] != 0, PowerupsPerLevel[Level - 1] != 0, EnemiesPerLevel[Level - 1] != 0)

    df = demographics.merge(level_data)
    df1 = demographics.merge(level_data_without_outliers)

    p = createPersonality(df) # Personality Traits
 
    if CoinsPerLevel[Level - 1] != 0:
        plot(df, 'collectedCoins', CoinsPerLevel[Level - 1], 'Coins - Level {}'.format(Level), 'Coin ID')
        correlateElementsAndTraits(df, Level, 'collectedCoins', CoinsPerLevel[Level - 1], p)

    if PowerupsPerLevel[Level - 1] != 0:
        plot(df, 'collectedPowerups', PowerupsPerLevel[Level - 1], 'Powerups - Level {}'.format(Level), 'Powerup ID')
        correlateElementsAndTraits(df, Level, 'collectedPowerups', PowerupsPerLevel[Level - 1], p)

    if EnemiesPerLevel[Level - 1] != 0:
        plot(df, 'killedEnemies', EnemiesPerLevel[Level - 1], 'Enemies - Level {}'.format(Level), 'Enemy ID')
        correlateElementsAndTraits(df, Level, 'killedEnemies', EnemiesPerLevel[Level - 1], p)

    correlateTimeLeftOnWinning(df1, Level, p)

# Show plot
# plt.show()